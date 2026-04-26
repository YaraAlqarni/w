const tourismData = {
  riyadh: {
    cityAr: "الرياض",
    cityEn: "Riyadh",
    places: [
      {
        name: "الدرعية - حي الطريف",
        type: "تراث",
        description: "وجهة تاريخية مسجلة في اليونسكو وتُعد من أبرز معالم الرياض لمحبي التراث والثقافة السعودية.",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/riyadh",
        source: "Visit Saudi",
        sustainabilityTips: [
          "حافظ على نظافة الموقع التراثي ولا تترك أي مخلفات خلفك.",
          "التزم بالمسارات المحددة لحماية المباني التاريخية والمناطق الحساسة.",
          "ادعم المتاجر والمنتجات المحلية لتعزيز السياحة المستدامة في المدينة."
        ]
      },
      {
        name: "بوليفارد رياض سيتي",
        type: "مشهور",
        description: "من أشهر مناطق الترفيه في الرياض، ويضم مطاعم وتجارب وأنشطة وفعاليات موسمية متنوعة.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/seasons/riyadh-season",
        source: "Riyadh Season / Visit Saudi",
        sustainabilityTips: [
          "استخدم المواصلات المشتركة أو العامة لتخفيف الازدحام والانبعاثات.",
          "قلل من استخدام البلاستيك أحادي الاستخدام أثناء زيارتك.",
          "تخلّص من النفايات في الأماكن المخصصة وحافظ على نظافة المنطقة."
        ]
      },
      {
        name: "فعاليات موسم الرياض",
        type: "جديد",
        description: "فعاليات وتجارب حديثة ومتجددة باستمرار تشمل عروضًا ومناطق ترفيهية وتجارب عالمية.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/seasons/riyadh-season",
        source: "Visit Saudi",
        sustainabilityTips: [
          "استخدم التذاكر الإلكترونية والخرائط الرقمية بدل المطبوعات.",
          "شارك السيارة أو استخدم النقل العام لتخفيف الازدحام.",
          "ارمِ النفايات في الأماكن المخصصة وحافظ على نظافة الفعالية."
        ]
      },
      {
        name: "Edge of the World",
        type: "طبيعة",
        description: "أحد أشهر المواقع الطبيعية القريبة من الرياض بإطلالات صخرية مدهشة وتجربة مثالية لعشاق المغامرة.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://book.visitsaudi.com/product/31d59430-50a6-48ee-b041-90590277e5ce?locale=en",
        source: "Visit Saudi Booking",
        sustainabilityTips: [
          "احرص على عدم العبث بالتكوينات الصخرية أو الكتابة عليها.",
          "خذ معك عبوة ماء قابلة لإعادة الاستخدام لتقليل النفايات.",
          "اتبع تعليمات السلامة والمسارات المخصصة لحماية البيئة الصحراوية."
        ]
      }
    ]
  },
  jeddah: {
    cityAr: "جدة",
    cityEn: "Jeddah",
    places: [
      {
        name: "البلد التاريخية",
        type: "تراث",
        description: "من أشهر مناطق جدة التاريخية، تتميز بالأزقة القديمة والأسواق التراثية والمباني الحجازية العريقة.",
        image: "https://images.unsplash.com/photo-1526481280695-3c4691f7f8c3?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/jeddah",
        source: "Visit Saudi",
        sustainabilityTips: [
          "احترم المباني التاريخية ولا تلمس العناصر الأثرية أو تتلفها.",
          "تسوق من الحرفيين المحليين لدعم الاقتصاد المحلي بشكل مستدام.",
          "خفف من استخدام المواد البلاستيكية أثناء الجولة داخل المنطقة."
        ]
      },
      {
        name: "كورنيش جدة",
        type: "واجهة بحرية",
        description: "واجهة بحرية شهيرة توفر إطلالات على البحر الأحمر وممرات للمشي ومناطق عائلية وفنية.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/jeddah/attractions/jeddah-corniche",
        source: "Visit Saudi",
        sustainabilityTips: [
          "حافظ على نظافة الواجهة البحرية ولا تترك أي مخلفات على الساحل.",
          "استخدم زجاجة ماء قابلة لإعادة الاستخدام بدل العبوات البلاستيكية.",
          "تجنب إزعاج الحياة البحرية واحترم المساحات العامة."
        ]
      },
      {
        name: "جدة آرت بروميناد",
        type: "جديد",
        description: "من الواجهات الحديثة والمميزة في جدة، وتناسب التنزه والتصوير والاستمتاع بالأجواء البحرية.",
        image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/jeddah/attractions/jeddah-art-promenade",
        source: "Visit Saudi",
        sustainabilityTips: [
          "استفد من المشي داخل المنطقة لتقليل استخدام السيارة لمسافات قصيرة.",
          "ارمِ النفايات في الحاويات المخصصة وحافظ على الواجهة البحرية نظيفة.",
          "ادعم المقاهي والمشاريع المحلية الصديقة للبيئة متى أمكن."
        ]
      },
      {
        name: "موسم جدة",
        type: "فعاليات",
        description: "موسم ترفيهي حديث يضم حفلات وتجارب بحرية وعروضًا وأنشطة عائلية متنوعة.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/seasons/jeddah-season",
        source: "Visit Saudi",
        sustainabilityTips: [
          "اختر التذاكر والخدمات الرقمية لتقليل استهلاك الورق.",
          "استخدم النقل الجماعي أو شارك الرحلة مع الآخرين عند حضور الفعاليات.",
          "التزم بتعليمات إدارة الفعالية الخاصة بالنظافة وفرز النفايات."
        ]
      }
    ]
  },
  alula: {
    cityAr: "العلا",
    cityEn: "AlUla",
    places: [
      {
        name: "الحِجر",
        type: "تراث",
        description: "موقع تاريخي عالمي ومدرج ضمن اليونسكو، ويُعد من أهم الوجهات السياحية في المملكة.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/alula",
        source: "Visit Saudi",
        sustainabilityTips: [
          "لا تقترب من النقوش الأثرية أو تلمسها للحفاظ عليها للأجيال القادمة.",
          "التزم بالجولات والمسارات المحددة لتقليل التأثير على الموقع التاريخي.",
          "احمل معك مخلفاتك الشخصية ولا تترك أي أثر في المكان."
        ]
      },
      {
        name: "صخرة الفيل",
        type: "مشهور",
        description: "تشكّل صخري طبيعي شهير جدًا في العلا، ويُعد من أكثر الأماكن جذبًا للزوار والتصوير.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/alula",
        source: "Visit Saudi",
        sustainabilityTips: [
          "تجنب تسلق التكوينات الصخرية أو العبث بها حفاظًا على طبيعتها.",
          "التزم بمناطق الجلوس المحددة لتقليل الضغط على البيئة الصحراوية.",
          "قلل الإضاءة والضوضاء غير الضرورية للحفاظ على هدوء الموقع."
        ]
      },
      {
        name: "AlUla Moments",
        type: "جديد",
        description: "سلسلة من الفعاليات والتجارب الحديثة في العلا، وتشمل مغامرات وفنون وتجارب موسمية فريدة.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/alula/events/alula-moments",
        source: "Visit Saudi",
        sustainabilityTips: [
          "اختر التجارب التي تراعي البيئة المحلية وتدعم المجتمع المحلي.",
          "استخدم الوسائل الرقمية للحجوزات والمعلومات بدل المطبوعات الورقية.",
          "احرص على تقليل النفايات أثناء حضور الفعاليات والأنشطة."
        ]
      },
      {
        name: "مهرجان سماء العلا",
        type: "فعاليات",
        description: "فعالية مميزة تشتهر بتجارب المناطيد ومراقبة النجوم والأنشطة الليلية وسط طبيعة العلا.",
        image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/alula/events/alula-skies-festival",
        source: "Visit Saudi",
        sustainabilityTips: [
          "حافظ على هدوء المكان لتقليل الإزعاج في البيئة الطبيعية الليلية.",
          "استخدم عبوات قابلة لإعادة الاستخدام أثناء حضور الفعاليات الخارجية.",
          "اتبع تعليمات المنظمين لحماية الموقع وتجربة الزوار."
        ]
      }
    ]
  },
  abha: {
    cityAr: "أبها",
    cityEn: "Abha",
    places: [
      {
        name: "شارع الفن",
        type: "مشهور",
        description: "من أشهر أماكن أبها ويتميز بالأجواء الفنية والمعارض والمقاهي والفعاليات الثقافية.",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/aseer/attractions/art-street-in-abha",
        source: "Visit Saudi",
        sustainabilityTips: [
          "امشِ داخل المنطقة بدل التنقل القصير بالسيارة متى أمكن.",
          "حافظ على الأعمال الفنية والمرافق العامة ولا تعبث بها.",
          "ادعم المقاهي والمعارض المحلية للمساهمة في تنمية السياحة الثقافية."
        ]
      },
      {
        name: "رجال ألمع",
        type: "تراث",
        description: "قرية تراثية شهيرة في منطقة عسير، معروفة بطرازها المعماري الفريد وتاريخها الثقافي الغني.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/aseer/attractions/rijal-almaa-of-aseer",
        source: "Visit Saudi",
        sustainabilityTips: [
          "احترم الطابع التراثي للقرية وتجنب أي سلوك قد يضر بالمباني القديمة.",
          "اشترِ المنتجات المحلية والحرف اليدوية لدعم المجتمع المحلي.",
          "استخدم المياه باعتدال خاصة في المناطق الجبلية ذات الموارد المحدودة."
        ]
      },
      {
        name: "منتزه الحبلة",
        type: "طبيعة",
        description: "من الوجهات الطبيعية المميزة في أبها، ويشتهر بالأجواء الجبلية والإطلالات الرائعة.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/aseer/attractions/al-habala-park",
        source: "Visit Saudi",
        sustainabilityTips: [
          "ابقَ في المسارات المحددة لحماية النباتات والتربة الجبلية.",
          "لا تترك مخلفات الطعام أو العبوات في المناطق الطبيعية.",
          "استمتع بالطبيعة بهدوء وتجنب تشغيل الأصوات المرتفعة."
        ]
      },
      {
        name: "وجهات عسير الرائجة",
        type: "جديد",
        description: "مجموعة من الوجهات والأنشطة الرائجة حديثًا في عسير لمحبي الاستكشاف والطبيعة والمغامرة.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/aseer/stories/aseer-top-trending-places",
        source: "Visit Saudi",
        sustainabilityTips: [
          "اختر مزودي الخدمات الذين يدعمون الاستدامة والمنتجات المحلية.",
          "خطط لرحلتك مسبقًا لتقليل التنقل غير الضروري واستهلاك الوقود.",
          "احرص على ترك المكان كما كان دون أي أثر بيئي."
        ]
      }
    ]
  },
  taif: {
    cityAr: "الطائف",
    cityEn: "Taif",
    places: [
      {
        name: "الهدا",
        type: "طبيعة",
        description: "من أجمل مناطق الطائف الجبلية، وتشتهر بالمناظر الطبيعية والتلفريك والأجواء المعتدلة.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/taif",
        source: "Visit Saudi",
        sustainabilityTips: [
          "التزم بمناطق الوقوف والمسارات المعتمدة لحماية البيئة الجبلية.",
          "لا ترمِ النفايات من المرتفعات أو الطرق الجبلية.",
          "قلل استهلاك الماء والموارد أثناء الجلسات والنزهات."
        ]
      },
      {
        name: "الكر السياحي",
        type: "مشهور",
        description: "من الوجهات المعروفة في الطائف للعائلات والزوار، ويضم أنشطة وتجارب وترفيهًا متنوعًا.",
        image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/taif",
        source: "Visit Saudi",
        sustainabilityTips: [
          "استخدم المرافق العامة بطريقة مسؤولة وتجنب الهدر في الماء والكهرباء.",
          "تخلص من النفايات في الأماكن المخصصة بعد الانتهاء من الزيارة.",
          "شجع أفراد المجموعة على احترام المكان والحفاظ على نظافته."
        ]
      },
      {
        name: "ممشى الطائف",
        type: "جديد",
        description: "واجهة حديثة ونشطة تضم مطاعم ومقاهي ومتاجر وفعاليات موسمية تناسب الزوار والعائلات.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/taif/attractions/taif-city-walk",
        source: "Visit Saudi",
        sustainabilityTips: [
          "استفد من المشي كوسيلة تنقل مستدامة داخل الوجهة نفسها.",
          "اختر الأكواب والأدوات القابلة لإعادة الاستخدام من المقاهي القريبة.",
          "ساهم في إبقاء الممشى نظيفًا وآمنًا للجميع."
        ]
      },
      {
        name: "منتزه الردف",
        type: "فعاليات",
        description: "من أشهر المتنزهات في الطائف ويتميز بالمساحات الخضراء والنافورات والأجواء العائلية.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/taif/attractions/arruddaf-park-in-taif",
        source: "Visit Saudi",
        sustainabilityTips: [
          "حافظ على المساحات الخضراء ولا تدس المزروعات أو تعبث بها.",
          "تجنب هدر المياه في دورات المياه والمرافق العامة.",
          "اجمع مخلفات النزهة كاملة قبل مغادرة المنتزه."
        ]
      }
    ]
  },
  khobar: {
    cityAr: "الخبر",
    cityEn: "Khobar",
    places: [
      {
        name: "واجهة الخبر البحرية",
        type: "واجهة بحرية",
        description: "من أشهر معالم الخبر، مثالية للمشي والاسترخاء والاستمتاع بإطلالات البحر والأنشطة العائلية.",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/eastern-province/attractions/khobar-seafront",
        source: "Visit Saudi",
        sustainabilityTips: [
          "حافظ على نظافة الواجهة البحرية والشاطئ بعد الانتهاء من الزيارة.",
          "تجنب رمي أي مواد قد تضر البيئة البحرية أو الطيور.",
          "استخدم عبوات متعددة الاستخدام لتقليل النفايات البلاستيكية."
        ]
      },
      {
        name: "موسم الخبر",
        type: "جديد",
        description: "فعاليات حديثة وتجارب موسمية على الواجهة البحرية تشمل الترفيه والثقافة والعروض.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/seasons/al-khobar-season",
        source: "Visit Saudi",
        sustainabilityTips: [
          "فضّل الحجز الإلكتروني والتذاكر الرقمية لتقليل الورق.",
          "شارك الرحلة مع العائلة أو الأصدقاء لتقليل الانبعاثات.",
          "التزم بإرشادات إعادة التدوير والنظافة داخل الفعاليات."
        ]
      },
      {
        name: "متحف الطيبين",
        type: "تراث",
        description: "متحف مميز في الخبر يعرض تفاصيل الحياة القديمة بلمسة تراثية ونوستالجية جذابة.",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/eastern-province/attractions/taybeen-museum",
        source: "Visit Saudi",
        sustainabilityTips: [
          "احترم المعروضات التراثية ولا تلمسها إلا إذا كان ذلك مسموحًا.",
          "ادعم السياحة الثقافية بشراء المنتجات المحلية من المتاجر المعتمدة.",
          "حافظ على هدوء المكان لتوفير تجربة أفضل للجميع."
        ]
      },
      {
        name: "Khobar Breeze",
        type: "فعاليات",
        description: "فعالية بحرية مميزة على الساحل الشرقي تجمع بين الإطلالات الجميلة والأنشطة الترفيهية.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        bookingUrl: "https://www.visitsaudi.com/en/eastern-province/events/khobar-breeze-festival",
        source: "Visit Saudi",
        sustainabilityTips: [
          "تجنب ترك أي مخلفات في المناطق الساحلية أو أماكن الجلوس.",
          "استخدم وسائل نقل جماعية عند حضور الفعالية إن أمكن.",
          "احرص على احترام البيئة البحرية وتقليل الضوضاء غير الضرورية."
        ]
      }
    ]
  }
};

const cityAliases = {
  "الرياض": "riyadh",
  "riyاض": "riyadh",
  "riyadh": "riyadh",
  "جدة": "jeddah",
  "jeddah": "jeddah",
  "العلا": "alula",
  "alula": "alula",
  "al ula": "alula",
  "abha": "abha",
  "أبها": "abha",
  "الطائف": "taif",
  "taif": "taif",
  "الخبر": "khobar",
  "khobar": "khobar"
};

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");
const resultsTitle = document.getElementById("resultsTitle");
const resultsSubtitle = document.getElementById("resultsSubtitle");
const emptyState = document.getElementById("emptyState");
const cityChips = document.getElementById("cityChips");
const typeFilter = document.getElementById("typeFilter");
const placesCount = document.getElementById("placesCount");
const citiesCount = document.getElementById("citiesCount");

const cityKeys = Object.keys(tourismData);
const totalPlaces = cityKeys.reduce((sum, key) => sum + tourismData[key].places.length, 0);
placesCount.textContent = totalPlaces;
citiesCount.textContent = cityKeys.length;

let currentCityKey = null;

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function createCityChips() {
  cityKeys.forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = tourismData[key].cityAr;
    btn.addEventListener("click", () => {
      cityInput.value = tourismData[key].cityAr;
      searchCity();
    });
    cityChips.appendChild(btn);
  });
}

function updateActiveChip(cityKey) {
  [...cityChips.children].forEach((chip) => {
    chip.classList.toggle("active", chip.textContent === tourismData[cityKey]?.cityAr);
  });
}

function getCityKey(input) {
  const normalized = normalizeText(input);
  return cityAliases[normalized] || null;
}

function renderPlaces(cityKey) {
  const selectedType = typeFilter.value;
  const city = tourismData[cityKey];
  let places = city.places;

  if (selectedType !== "all") {
    places = places.filter(place => place.type === selectedType);
  }

  results.innerHTML = "";

  if (!places.length) {
    emptyState.classList.add("active");
    emptyState.querySelector("h3").textContent = "لا توجد نتائج بهذا التصنيف داخل هذه المدينة";
    emptyState.querySelector("p").textContent = `جرّب تصنيفًا آخر أو ابحث عن مدينة مختلفة.`;
    return;
  }

  emptyState.classList.remove("active");

  places.forEach((place) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image">
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <div class="card-overlay"></div>
        <div class="card-tags">
          <span class="badge city">${city.cityAr}</span>
          <span class="badge type">${place.type}</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${place.name}</h3>
        <p class="card-description">${place.description}</p>
        <div class="sustainability-box">
          <h4>🌱 نصائح الاستدامة البيئية</h4>
          <ul class="sustainability-list">
            ${place.sustainabilityTips.map((tip) => `<li>${tip}</li>`).join("")}
          </ul>
        </div>
        <div class="card-footer">
          <a class="booking-link" href="${place.bookingUrl}" target="_blank" rel="noopener noreferrer">زيارة / حجز</a>
          <span class="source-note">المصدر: ${place.source}</span>
        </div>
      </div>
    `;
    results.appendChild(card);
  });
}

function searchCity() {
  const cityKey = getCityKey(cityInput.value);

  if (!cityKey) {
    currentCityKey = null;
    results.innerHTML = "";
    resultsTitle.textContent = "المدينة غير مدعومة حاليًا";
    resultsSubtitle.textContent = "جرّب مدينة من المدن المتوفرة: الرياض، جدة، العلا، أبها، الطائف، الخبر.";
    emptyState.classList.add("active");
    emptyState.querySelector("h3").textContent = "لم نعثر على هذه المدينة داخل قاعدة البيانات";
    emptyState.querySelector("p").textContent = "يمكنك إضافة مدن أخرى بسهولة من داخل ملف JavaScript.";
    [...cityChips.children].forEach((chip) => chip.classList.remove("active"));
    return;
  }

  currentCityKey = cityKey;
  const city = tourismData[cityKey];
  resultsTitle.textContent = `أبرز الوجهات السياحية في ${city.cityAr}`;
  resultsSubtitle.textContent = `تم العثور على ${city.places.length} أماكن سياحية بين المشهور والجديد في ${city.cityAr}.`;
  updateActiveChip(cityKey);
  renderPlaces(cityKey);
}

searchBtn.addEventListener("click", searchCity);
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchCity();
});

typeFilter.addEventListener("change", () => {
  if (currentCityKey) {
    renderPlaces(currentCityKey);
  }
});

createCityChips();
