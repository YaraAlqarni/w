/* ─────────────────────────────────────
   GAME STATE
───────────────────────────────────── */
let selectedAvatar = null;
let currentQuestion = null;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let completedCount = 0;
let timeLeft = 300;
let timerInterval = null;
let playerName = '';
let chosenAvatar = 'girl';
let gameStartTime = null;
let maxStreak = 0;
let currentStreak = 0;

// Per-question results: { idx, correct, location }
const questionResults = [];

const speed = 22;
let px = 50, py = 50;

/* ─────────────────────────────────────
   AUDIO MANAGER
   • bg.mp3  → loops independently throughout the game.
   • win.mp3 / lose.mp3 → played via cloned nodes so they
     can NEVER pause or interrupt the BG track.
   • IDM / tab-switch guard → if anything externally pauses
     audioBg while the game is active, it auto-resumes.
───────────────────────────────────── */
const audioBg   = document.getElementById('bg');
const audioWin  = document.getElementById('win');
const audioLose = document.getElementById('lose');

// Programmatic loop + volume
audioBg.loop   = true;
audioBg.volume = 0.45;

// Fallback loop in case the 'loop' attribute misfires
audioBg.addEventListener('ended', () => {
  audioBg.currentTime = 0;
  audioBg.play().catch(() => {});
});

// ── Flag: is the game currently active? ──────────────
let gameActive = false;

// ── IDM & External-Pause Guard ───────────────────────
// IDM and other extensions can silently pause audio.
// If audioBg is paused while gameActive is true, resume it.
audioBg.addEventListener('pause', () => {
  if (!gameActive) return;
  setTimeout(() => {
    if (gameActive && audioBg.paused) {
      audioBg.play().catch(() => {});
    }
  }, 80);
});

// ── Tab-Visibility Guard ──────────────────────────────
// Resume BG when the user switches back to this tab.
document.addEventListener('visibilitychange', () => {
  if (!gameActive) return;
  if (!document.hidden && audioBg.paused) {
    audioBg.play().catch(() => {});
  }
});

let bgUnlocked = false;

/** Start the BG music. Called once when the game begins. */
function playBg() {
  gameActive = true;
  if (bgUnlocked) audioBg.currentTime = 0;

  const p = audioBg.play();
  if (p !== undefined) {
    p.then(() => { bgUnlocked = true; })
     .catch(() => {
       const retry = () => {
         audioBg.play().then(() => { bgUnlocked = true; }).catch(() => {});
         document.removeEventListener('click',      retry);
         document.removeEventListener('keydown',    retry);
         document.removeEventListener('touchstart', retry);
       };
       document.addEventListener('click',      retry, { once: true });
       document.addEventListener('keydown',    retry, { once: true });
       document.addEventListener('touchstart', retry, { once: true });
     });
  }
}

/** Stop the BG music at game end. */
function stopBg() {
  gameActive = false;   // disarm pause-guard FIRST
  try { audioBg.pause(); } catch (e) {}
}

/**
 * Play win/lose SFX independently of the BG track.
 * Uses cloneNode(true) so src is copied, appends to body
 * so all browsers play it, then self-removes when done.
 */
function playSfx(audioEl) {
  try {
    const sfx  = audioEl.cloneNode(true);
    sfx.volume = 0.75;
    sfx.loop   = false;
    document.body.appendChild(sfx);
    sfx.play().catch(() => {});
    sfx.addEventListener('ended', () => sfx.remove(), { once: true });
    sfx.addEventListener('error', () => sfx.remove(), { once: true });
    setTimeout(() => { try { sfx.remove(); } catch(e){} }, 5000);
  } catch (e) {}
}

/* ─────────────────────────────────────
   QUESTIONS DATA
───────────────────────────────────── */
const places = [
  { question: 'هل جزر فرسان أكبر أرخبيل طبيعي في السعودية؟', answer: true, location: 'جزر فرسان', region: 'جنوب' },
  { question: 'هل الأحساء تضم 2.5 مليون نخلة؟', answer: true, location: 'واحة الأحساء', region: 'شرق' },
  { question: 'هل حافة العالم تطل على وادٍ قديم؟', answer: true, location: 'حافة العالم', region: 'وسط' },
  { question: 'هل العلا تضم جبل الفيل؟', answer: true, location: 'العلا', region: 'شمال' },
  { question: 'هل شرم أبحر تقع جنوب جدة؟', answer: false, location: 'شرم أبحر', region: 'غرب' },
  { question: 'هل ارتفاع جبل فيفاء يتجاوز 3500 متر؟', answer: false, location: 'جبل فيفاء', region: 'جنوب' },
  { question: 'هل الشفا مصيف مشهور بالطائف؟', answer: true, location: 'الشفا', region: 'غرب' },
  { question: 'هل الجبل الأخضر يقع في منطقة أبها؟', answer: true, location: 'الجبل الأخضر', region: 'جنوب' },
  { question: 'هل منطقة عسير تمتلك تنوعًا بيولوجيًا وطيور نادرة؟', answer: true, location: 'منطقة عسير', region: 'جنوب' },
  { question: 'هل خريم محمية طبيعية معتمدة رسميًا؟', answer: true, location: 'محمية خريم', region: 'وسط' },
  { question: 'هل غابة رغدان من أشهر أودية الباحة؟', answer: true, location: 'غابة رغدان', region: 'غرب' },
  { question: 'هل البحر الأحمر يضم 90 جزيرة فقط؟', answer: false, location: 'البحر الأحمر', region: 'غرب' },
  { question: 'هل مشروع الرياض الخضراء يستهدف 7.5 مليون شجرة؟', answer: true, location: 'الرياض الخضراء', region: 'وسط' },
  { question: 'هل نيوم مشروع مدينة ذكية مستدامة بالكامل بالطاقة المتجددة؟', answer: true, location: 'نيوم', region: 'شمال' }
];

/* ─────────────────────────────────────
   FLOATING PARTICLES
───────────────────────────────────── */
function spawnParticles() {
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      background: hsl(${Math.random() > 0.5 ? 166 : 213},80%,60%);
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * 8}s;
    `;
    document.body.appendChild(p);
  }
}
spawnParticles();

/* ─────────────────────────────────────
   AVATAR PICKER
───────────────────────────────────── */
function pick(type, wrapEl) {
  selectedAvatar = type;
  document.querySelectorAll('.avatar').forEach(a => a.classList.remove('selected'));
  document.querySelectorAll('.avatar-wrap').forEach(w => w.classList.remove('selected-wrap'));
  document.getElementById('avatar' + type.charAt(0).toUpperCase() + type.slice(1)).classList.add('selected');
  wrapEl.classList.add('selected-wrap');
}

/* ─────────────────────────────────────
   START GAME
───────────────────────────────────── */
function startGame() {
  playerName = document.getElementById('name').value.trim();
  if (!playerName) {
    const card = document.querySelector('.start-card');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
    document.getElementById('name').focus();
    return;
  }
  if (!selectedAvatar) {
    showToast('اختر شخصيتك أولًا!', 'wrong');
    return;
  }

  chosenAvatar = selectedAvatar;
  gameStartTime = Date.now();

  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('ui').classList.remove('hidden');
  document.getElementById('gameArea').classList.remove('hidden');

  document.getElementById('playerName').textContent = playerName;
  document.getElementById('playerSprite').src = 'images/' + chosenAvatar + '.png';
  document.getElementById('hudAvatar').src = 'images/' + chosenAvatar + '.png';
  updateProgress();

  playBg();
  startTimer();
}

/* ─────────────────────────────────────
   TIMER
───────────────────────────────────── */
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const el = document.getElementById('timer');
    el.textContent = timeLeft;
    el.classList.toggle('danger', timeLeft <= 30);
    if (timeLeft <= 0) endGame();
  }, 1000);
}

/* ─────────────────────────────────────
   PLAYER MOVEMENT
───────────────────────────────────── */
const player = document.getElementById('player');

function movePlayer(dx, dy) {
  px = Math.max(0, Math.min(window.innerWidth - 70, px + dx));
  py = Math.max(80, Math.min(window.innerHeight - 70, py + dy));
  player.style.left = px + 'px';
  player.style.top = py + 'px';
  player.classList.add('moving');
  setTimeout(() => player.classList.remove('moving'), 100);
  checkCollision();
}

document.addEventListener('keydown', e => {
  if (document.getElementById('gameArea').classList.contains('hidden')) return;
  if (!document.getElementById('qBox').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); movePlayer(speed, 0); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); movePlayer(-speed, 0); }
  if (e.key === 'ArrowUp') { e.preventDefault(); movePlayer(0, -speed); }
  if (e.key === 'ArrowDown') { e.preventDefault(); movePlayer(0, speed); }
});

// D-Pad (mobile)
['dUp', 'dDown', 'dLeft', 'dRight'].forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;
  let interval = null;
  const dirs = { dUp: [0, -speed], dDown: [0, speed], dLeft: [-speed, 0], dRight: [speed, 0] };
  const fire = () => movePlayer(...dirs[id]);
  btn.addEventListener('touchstart', e => { e.preventDefault(); fire(); interval = setInterval(fire, 120); }, { passive: false });
  btn.addEventListener('touchend', () => clearInterval(interval));
  btn.addEventListener('mousedown', () => { fire(); interval = setInterval(fire, 120); });
  btn.addEventListener('mouseup', () => clearInterval(interval));
});

/* ─────────────────────────────────────
   COLLISION
───────────────────────────────────── */
function checkCollision() {
  const pRect = player.getBoundingClientRect();
  for (let i = 0; i < places.length; i++) {
    const tile = document.getElementById('place' + i);
    if (!tile || tile.classList.contains('visited')) continue;
    const tRect = tile.getBoundingClientRect();
    const overlap = pRect.left < tRect.right &&
      pRect.right > tRect.left &&
      pRect.top < tRect.bottom &&
      pRect.bottom > tRect.top;
    if (overlap) { openQuestion(i); break; }
  }
}

/* ─────────────────────────────────────
   QUESTION
───────────────────────────────────── */
function openQuestion(i) {
  currentQuestion = i;
  const q = places[i];
  document.getElementById('qBadgeText').textContent = `سؤال ${i + 1} من ${places.length}`;
  document.getElementById('qLocation').textContent = q.location;
  document.getElementById('qText').textContent = q.question;
  document.getElementById('qBox').classList.remove('hidden');
}

/* ─────────────────────────────────────
   ANSWER
───────────────────────────────────── */
function answer(playerAnswer) {
  const q = places[currentQuestion];
  const isOk = playerAnswer === q.answer;
  const card = document.querySelector('.q-card');

  // Track result
  questionResults.push({ idx: currentQuestion, correct: isOk, location: q.location, region: q.region });

  if (isOk) {
    score += 10;
    correctCount++;
    currentStreak++;
    maxStreak = Math.max(maxStreak, currentStreak);
    card.classList.remove('wrong-flash');
    void card.offsetWidth;
    card.classList.add('correct-flash');
    showToast('✅ إجابة صحيحة! +10 نقاط', 'correct');
    playSfx(audioWin);
  } else {
    score = Math.max(0, score - 5);
    wrongCount++;
    currentStreak = 0;
    card.classList.remove('correct-flash');
    void card.offsetWidth;
    card.classList.add('wrong-flash');
    showToast('❌ إجابة خاطئة! -5 نقاط', 'wrong');
    playSfx(audioLose);
  }

  document.getElementById('score').textContent = score;

  setTimeout(() => {
    document.getElementById('qBox').classList.add('hidden');
    document.getElementById('place' + currentQuestion).classList.add('visited');
    completedCount++;
    updateProgress();
    if (completedCount === places.length) endGame();
  }, 500);
}

/* ─────────────────────────────────────
   PROGRESS
───────────────────────────────────── */
function updateProgress() {
  const pct = (completedCount / places.length) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = completedCount + ' / ' + places.length;
}

/* ─────────────────────────────────────
   TOAST NOTIFICATION
───────────────────────────────────── */
let toastTimeout = null;
function showToast(msg, type) {
  const t = document.getElementById('answerToast');
  t.textContent = msg;
  t.className = 'show ' + type;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { t.className = ''; }, 2200);
}

/* ─────────────────────────────────────
   LEADERBOARD (localStorage)
───────────────────────────────────── */
const LB_KEY = 'saudiEcoLeaderboard';

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem(LB_KEY) || '[]'); }
  catch (e) { return []; }
}

function saveLeaderboard(entry) {
  let lb = getLeaderboard();
  lb.push(entry);
  lb.sort((a, b) => b.score - a.score);
  lb = lb.slice(0, 5);
  localStorage.setItem(LB_KEY, JSON.stringify(lb));
  return lb;
}

/* ─────────────────────────────────────
   END GAME + ANALYTICS
───────────────────────────────────── */
function endGame() {
  clearInterval(timerInterval);
  stopBg();

  const timeUsed = 300 - timeLeft;
  const totalQ = places.length;
  const accuracy = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;
  const ecoKg = Math.round(correctCount * 8.5);
  const avgPer = totalQ > 0 ? (score / totalQ).toFixed(1) : 0;

  // Rank
  let rankClass, rankText, emoji;
  if (accuracy >= 90) { rankClass = 'rank-champion'; rankText = '🌿 بطل البيئة'; emoji = '🌿'; }
  else if (accuracy >= 70) { rankClass = 'rank-gold'; rankText = '🥇 مستكشف متميز'; emoji = '🏆'; }
  else if (accuracy >= 50) { rankClass = 'rank-silver'; rankText = '🥈 مستكشف جيد'; emoji = '🎖️'; }
  else { rankClass = 'rank-bronze'; rankText = '🥉 مستكشف مبتدئ'; emoji = '🌱'; }

  // Save to leaderboard
  const myEntry = { name: playerName, score, accuracy, timeUsed, avatar: chosenAvatar };
  const lb = saveLeaderboard(myEntry);

  // Show end screen
  document.getElementById('gameArea').classList.add('hidden');
  document.getElementById('ui').classList.add('hidden');
  document.getElementById('endScreen').classList.remove('hidden');

  // Fill hero
  document.getElementById('endEmoji').textContent = emoji;
  document.getElementById('endPlayerLine').textContent = `أحسنت يا ${playerName}!`;
  const badge = document.getElementById('rankBadge');
  badge.textContent = rankText;
  badge.className = 'rank-badge ' + rankClass;

  // KPI Cards
  document.getElementById('kpiScore').textContent = score;
  document.getElementById('kpiCorrect').textContent = correctCount;
  document.getElementById('kpiWrong').textContent = wrongCount;
  document.getElementById('kpiTime').textContent = timeUsed + 'ث';

  // Accuracy stats
  document.getElementById('accCorrect').textContent = correctCount;
  document.getElementById('accWrong').textContent = wrongCount;
  document.getElementById('accStreak').textContent = maxStreak;
  document.getElementById('accAvg').textContent = avgPer;
  document.getElementById('ringPct').textContent = accuracy + '%';

  // Animate ring
  const circumference = 2 * Math.PI * 40; // r=40
  const offset = circumference - (accuracy / 100) * circumference;
  setTimeout(() => {
    document.getElementById('ringFill').style.strokeDashoffset = offset;
  }, 600);

  // Eco bar
  const ecoPercent = Math.min((ecoKg / (totalQ * 8.5)) * 100, 100);
  document.getElementById('ecoValue').textContent = ecoKg;
  setTimeout(() => {
    document.getElementById('ecoBar').style.width = ecoPercent + '%';
  }, 600);

  // Bar chart
  renderBarChart();

  // Heatmap
  renderHeatmap();

  // Leaderboard
  renderLeaderboard(lb, myEntry);
}

/* ─────────────────────────────────────
   BAR CHART RENDERER
───────────────────────────────────── */
function renderBarChart() {
  const container = document.getElementById('barChart');
  container.innerHTML = '';

  const maxVal = 10;
  places.forEach((q, idx) => {
    const result = questionResults.find(r => r.idx === idx);
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';

    const bar = document.createElement('div');
    bar.className = 'bar';

    if (!result) {
      bar.classList.add('skipped');
      bar.style.height = '4px';
    } else if (result.correct) {
      bar.classList.add('correct');
      const h = Math.round((10 / maxVal) * 100);
      bar.style.height = h + 'px';
    } else {
      bar.classList.add('wrong');
      bar.style.height = '30px';
    }

    const numEl = document.createElement('span');
    numEl.className = 'bar-num';
    numEl.textContent = idx + 1;

    wrap.appendChild(bar);
    wrap.appendChild(numEl);
    container.appendChild(wrap);

    // Animate bar growth
    setTimeout(() => {
      bar.style.transform = 'scaleY(1)';
    }, 700 + idx * 55);
  });
}

/* ─────────────────────────────────────
   HEATMAP RENDERER
───────────────────────────────────── */
function renderHeatmap() {
  const grid = document.getElementById('heatmapGrid');
  grid.innerHTML = '';

  // Show all 14 places (2 columns × 7)
  grid.style.gridTemplateColumns = 'repeat(2, 1fr)';

  questionResults.slice(0, 8).forEach(r => {
    const cell = document.createElement('div');
    cell.className = 'heatmap-cell ' + (r.correct ? 'heat-correct' : 'heat-wrong');
    cell.innerHTML = `<span class="heat-icon">${r.correct ? '✅' : '❌'}</span>${r.location}`;
    grid.appendChild(cell);
  });
}

/* ─────────────────────────────────────
   LEADERBOARD RENDERER
───────────────────────────────────── */
function renderLeaderboard(lb, myEntry) {
  const list = document.getElementById('leaderboardList');
  list.innerHTML = '';

  if (!lb || lb.length === 0) {
    list.innerHTML = '<div class="lb-empty">لا توجد بيانات بعد. كن الأول!</div>';
    return;
  }

  const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];

  lb.forEach((entry, i) => {
    const isCurrent = entry.name === myEntry.name && entry.score === myEntry.score;
    const row = document.createElement('div');
    row.className = 'lb-row' + (isCurrent ? ' current-player' : '');
    row.innerHTML = `
      <span class="lb-rank">${medals[i] || (i + 1)}</span>
      <span class="lb-name">${entry.name}${isCurrent ? ' ⭐' : ''}</span>
      <span class="lb-score">${entry.score}ن</span>
      <span class="lb-time">${entry.timeUsed}ث</span>
    `;
    list.appendChild(row);
  });
}