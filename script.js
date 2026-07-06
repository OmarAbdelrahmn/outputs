const companyPhone = "966567300158";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const callLinks = document.querySelectorAll(".call-link");
const langToggle = document.querySelector("[data-lang-toggle]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function normalizePhone(phone) {
  return phone.replace(/[^\d]/g, "");
}

function missingPhone(event) {
  event.preventDefault();
  alert("رقم الهاتف غير متاح حاليًا. يرجى المحاولة لاحقًا.");
}

const cleanPhone = normalizePhone(companyPhone);

function refreshContactLinks(lang = document.documentElement.lang) {
  if (!cleanPhone) return;
  callLinks.forEach((link) => {
    link.href = `tel:+${cleanPhone}`;
  });
  const message =
    lang === "en"
      ? "Hello, I need garage door or electric shutter service from Abdullah Establishment in Jeddah."
      : "السلام عليكم، أحتاج خدمة من مؤسسة عبدالله لصيانة وتركيب الكراج والشتر في جدة.";
  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  });
}

if (cleanPhone) {
  refreshContactLinks();
} else {
  callLinks.forEach((link) => link.addEventListener("click", missingPhone));
  whatsappLinks.forEach((link) => link.addEventListener("click", missingPhone));
}

const englishText = {
  "خدماتنا": "Services",
  "صيانة": "Maintenance",
  "إصلاح الشتر": "Shutter Repair",
  "برمجة الريموت": "Remote Programming",
  "طريقة العمل": "How We Work",
  "جدة": "Jeddah",
  "اتصل بنا": "Contact Us",
  "سياسة الخصوصية": "Privacy Policy",
  "متاح الآن لخدمة جدة 24 ساعة": "Available now for 24-hour service in Jeddah",
  "مؤسسة عبدالله لصيانة وتركيب الكراج والشتر": "Abdullah Establishment for Garage Door and Shutter Maintenance & Installation",
  "فني متخصص لصيانة أبواب الكراج، تصليح الشتر الكهربائي، تركيب شتر رول، وبرمجة ريموت الكراج في جدة - المملكة العربية السعودية.": "Specialized technician for garage door maintenance, electric shutter repair, roller shutter installation, and garage remote programming in Jeddah, Saudi Arabia.",
  "اتصل الآن: 0567300158": "Call Now: 0567300158",
  "واتساب لعرض السعر": "WhatsApp for a Quote",
  "متاح الآن": "Available Now",
  "رقم الهاتف: 0567300158": "Phone: 0567300158",
  "فني متخصص 24 ساعة": "24-Hour Specialist Technician",
  "جدة - المملكة العربية السعودية": "Jeddah, Saudi Arabia",
  "صيانة أبواب كراج": "Garage Door Maintenance",
  "تركيب أبواب وشتر": "Door & Shutter Installation",
  "تصليح الشتر الكهربائي": "Electric Shutter Repair",
  "برمجة ريموت الكراج": "Garage Remote Programming",
  "خدمة متخصصة": "Specialized Service",
  "نخدم العملاء في جدة - المملكة العربية السعودية بأعمال تركيب أبواب كراج، صيانة أبواب أوتوماتيكية، إصلاح شتر كهربائي، وبرمجة ريموت باب كراج. نستخدم صورًا حقيقية من أعمال الشتر والكراج المنفذة لتوضيح جودة العمل، وللتواصل المباشر اتصل على 0567300158.": "We serve customers in Jeddah, Saudi Arabia with garage door installation, automatic door maintenance, electric shutter repair, and garage remote programming. The photos shown are real work examples, and you can call us directly at 0567300158.",
  "كل ما يحتاجه باب الكراج والشتر": "Everything Your Garage Door or Shutter Needs",
  "تركيب أبواب كراج": "Garage Door Installation",
  "تركيب أبواب كراج جدة، باب كراج أوتوماتيك، أبواب رول، وتجهيز المسارات والموتور حسب مساحة المدخل.": "Garage doors in Jeddah, automatic garage doors, roll-up doors, tracks, and motors fitted to your entrance size.",
  "صيانة أبواب كراج، إصلاح أبواب كراج، تصليح باب كراج لا يفتح، ومعالجة الأصوات والتوقف المفاجئ بسرعة.": "Garage door maintenance, repairs, fixing doors that will not open, and solving noise or sudden stopping issues quickly.",
  "تركيب شتر كهربائي، صيانة شتر كهربائي، إصلاح شتر كهربائي، وأبواب شتر كهربائية للمنازل والمحلات.": "Electric shutter installation, maintenance, and repair for homes, villas, shops, and commercial spaces.",
  "برمجة ريموت باب كراج، ضبط لوحة التحكم، فحص الحساسات، وتجربة الفتح والإغلاق بعد الصيانة.": "Garage remote programming, control board setup, sensor checks, and open-close testing after service.",
  "مطابق لما تبحث عنه": "Matched to Your Search",
  "حل مباشر للمشكلة التي ضغطت عليها في الإعلان": "A Direct Solution for the Problem You Clicked",
  "ريموت لا يعمل، ريموت جديد، أو ضبط لوحة التحكم.": "Remote not working, new remote setup, or control board adjustment.",
  "الشتر عالق، لا يرتفع، أو يصدر صوتًا غير طبيعي.": "Shutter stuck, not lifting, or making unusual noise.",
  "صيانة باب كراج لا يفتح": "Garage Door Will Not Open",
  "فحص المسار، الموتور، الحساسات، والبرمجة.": "Inspection of tracks, motor, sensors, and programming.",
  "تركيب شتر رول وأبواب رول": "Roller Shutter & Roll-Up Door Installation",
  "تركيب جديد للمنازل، الفلل، المحلات، والمستودعات.": "New installation for homes, villas, shops, and warehouses.",
  "فحص واضح قبل الصيانة، وتنفيذ مرتب بعد الموافقة": "Clear Inspection Before Service, Organized Work After Approval",
  "معاينة العطل وتحديد سبب المشكلة في المسار أو الموتور أو الريموت.": "Inspect the fault and identify whether it is in the track, motor, or remote.",
  "توضيح الحل المناسب للعميل قبل بدء العمل.": "Explain the right solution before starting the work.",
  "تنفيذ التركيب أو الصيانة مع اختبار الباب أكثر من مرة.": "Complete the installation or maintenance and test the door several times.",
  "نصائح استخدام بسيطة للحفاظ على عمر الباب والشتر.": "Simple usage tips to help extend the life of the door and shutter.",
  "لماذا نحن": "Why Us",
  "خدمة مناسبة للبيوت والمحلات": "Service for Homes and Shops",
  "تشخيص عملي": "Practical Diagnosis",
  "نحدد هل المشكلة من الموتور، السلك، الريموت، الحساس، أو مسار الباب.": "We identify whether the problem is from the motor, wiring, remote, sensor, or door track.",
  "حلول للتركيب والصيانة": "Installation and Maintenance Solutions",
  "شركة أبواب كراج جدة وشركة شتر كهربائي جدة بخدمة واحدة واضحة.": "Garage door and electric shutter service in Jeddah through one clear contact.",
  "اهتمام بالأمان": "Safety Focus",
  "اختبار التوازن والإغلاق والحساسات لتقليل الأعطال المتكررة.": "We test balance, closing, and sensors to reduce repeated faults.",
  "نطاق الخدمة": "Service Area",
  "نخدم أحياء جدة حسب توفر المواعيد، للمنازل، الفلل، المستودعات، والمحلات التجارية التي تحتاج شتر رول أو باب كراج أوتوماتيك.": "We serve Jeddah districts subject to appointment availability for homes, villas, warehouses, and shops needing roller shutters or automatic garage doors.",
  "أبحر": "Obhur",
  "الشاطئ": "Al Shatie",
  "السلامة": "Al Salamah",
  "الصفا": "Al Safa",
  "الروضة": "Al Rawdah",
  "الحمدانية": "Al Hamdaniyah",
  "أبواب كراج جدة": "Garage Doors Jeddah",
  "تركيب أبواب أوتوماتيكية": "Automatic Door Installation",
  "صيانة أبواب أوتوماتيكية": "Automatic Door Maintenance",
  "أبواب شتر كهربائية": "Electric Shutter Doors",
  "شتر رول": "Roller Shutters",
  "تركيب أبواب رول": "Roll-Up Door Installation",
  "صيانة أبواب رول": "Roll-Up Door Maintenance",
  "فني أبواب كراج جدة": "Garage Door Technician Jeddah",
  "صور حقيقية من العمل": "Real Work Photos",
  "نماذج من الشتر وأبواب الكراج المنفذة": "Examples of Completed Shutters and Garage Doors",
  "باب كراج رول للفلل": "Roll-Up Garage Door for Villas",
  "شتر كهربائي للنوافذ": "Electric Window Shutter",
  "تركيب وتجهيز المسارات": "Track Setup and Installation",
  "تشطيب إطار خارجي": "Exterior Frame Finishing",
  "أبواب رول للمداخل": "Roll-Up Doors for Entrances",
  "شتر داخلي للمنازل": "Indoor Residential Shutter",
  "أبواب كراج للفلل": "Garage Doors for Villas",
  "شتر خارجي للنوافذ": "Outdoor Window Shutter",
  "هل باب الكراج لا يفتح أو الشتر متعطل؟": "Is Your Garage Door Not Opening or Is the Shutter Faulty?",
  "مؤسسة عبدالله لصيانة وتركيب الكراج والشتر. رقم الهاتف:": "Abdullah Establishment for Garage Door and Shutter Maintenance & Installation. Phone:",
  ". الموقع: جدة - المملكة العربية السعودية.": ". Location: Jeddah, Saudi Arabia.",
  "واتساب": "WhatsApp",
  "اتصال مباشر": "Direct Call",
  "رقم الهاتف": "Phone Number",
  "روابط مهمة": "Important Links",
  "©": "©",
  "جميع الحقوق محفوظة.": "All rights reserved.",
  "اتصال": "Call",
  "آخر تحديث: 6 يوليو 2026": "Last updated: July 6, 2026",
  "من نحن": "Who We Are",
  "هذه السياسة تخص مؤسسة عبدالله لصيانة وتركيب الكراج والشتر، وموقعنا الخدمي المخصص لعرض خدمات تركيب وصيانة أبواب الكراج والشتر في جدة - المملكة العربية السعودية.": "This policy applies to Abdullah Establishment for Garage Door and Shutter Maintenance & Installation and our service website for garage door and shutter services in Jeddah, Saudi Arabia.",
  "المعلومات التي قد نجمعها": "Information We May Collect",
  "عند تواصلك معنا عبر الهاتف أو واتساب قد تزودنا باسمك، رقم هاتفك، موقع الخدمة، ونوع العطل أو الخدمة المطلوبة. لا نطلب معلومات دفع أو بيانات حساسة من خلال هذا الموقع.": "When you contact us by phone or WhatsApp, you may provide your name, phone number, service location, and the requested service or issue. We do not request payment details or sensitive information through this website.",
  "كيف نستخدم المعلومات": "How We Use Information",
  "نستخدم معلومات التواصل فقط للرد على طلبك، ترتيب زيارة الخدمة، توضيح تفاصيل الصيانة أو التركيب، ومتابعة جودة الخدمة عند الحاجة.": "We use contact information only to respond to your request, arrange a service visit, explain maintenance or installation details, and follow up on service quality when needed.",
  "مشاركة المعلومات": "Information Sharing",
  "لا نبيع بيانات العملاء ولا نشاركها لأغراض تسويقية خارجية. قد تتم مشاركة بيانات الطلب مع الفني أو فريق العمل المسؤول عن تنفيذ الخدمة فقط.": "We do not sell customer data or share it for external marketing. Request details may be shared only with the technician or team responsible for the service.",
  "ملفات الارتباط والتحليلات": "Cookies and Analytics",
  "الموقع الحالي لا يستخدم نموذج تسجيل دخول ولا يجمع بيانات شخصية تلقائيًا. إذا تم لاحقًا إضافة أدوات قياس أو إعلانات، فسيتم استخدامها لتحسين أداء الموقع وقياس الزيارات وفق الأنظمة المعمول بها.": "This website does not use login forms or automatically collect personal information. If analytics or ads tools are added later, they will be used to improve site performance and measure visits according to applicable rules.",
  "حماية المعلومات": "Information Protection",
  "نتعامل مع بيانات التواصل بشكل محدود ووفق الغرض الذي قُدمت من أجله، ونحرص على عدم الاحتفاظ بأي بيانات غير ضرورية للخدمة.": "We handle contact details only for the purpose they were provided and avoid keeping unnecessary data.",
  "حقوقك": "Your Rights",
  "يمكنك طلب تعديل أو حذف بيانات التواصل المرتبطة بطلبك من خلال الاتصال بنا على الرقم الموضح أدناه.": "You may request correction or deletion of contact information related to your request by calling the number below.",
  "الموقع: جدة - المملكة العربية السعودية": "Location: Jeddah, Saudi Arabia"
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  textNodes.push({ node: walker.currentNode, original: walker.currentNode.nodeValue });
}

function translateText(lang) {
  textNodes.forEach((entry) => {
    if (lang === "ar") {
      entry.node.nodeValue = entry.original;
      return;
    }
    const trimmed = entry.original.trim();
    const replacement = englishText[trimmed];
    entry.node.nodeValue = replacement ? entry.original.replace(trimmed, replacement) : entry.original;
  });
}

function applyLanguage(lang) {
  const isEnglish = lang === "en";
  const isPrivacyPage = window.location.pathname.includes("privacy");
  document.documentElement.lang = isEnglish ? "en" : "ar";
  document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  document.title = isPrivacyPage
    ? isEnglish
      ? "Privacy Policy | Abdullah Establishment"
      : "سياسة الخصوصية | مؤسسة عبدالله لصيانة وتركيب الكراج والشتر"
    : isEnglish
      ? "Abdullah Establishment for Garage Door and Shutter Services | Jeddah"
      : "مؤسسة عبدالله لصيانة وتركيب الكراج والشتر | جدة";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = isPrivacyPage
      ? isEnglish
        ? "Privacy Policy for Abdullah Establishment for Garage Door and Shutter Maintenance & Installation in Jeddah, Saudi Arabia."
        : "سياسة الخصوصية الخاصة بمؤسسة عبدالله لصيانة وتركيب الكراج والشتر في جدة - المملكة العربية السعودية."
      : isEnglish
        ? "Abdullah Establishment in Jeddah, Saudi Arabia. Call 0567300158 for garage door installation, maintenance, electric shutter repair, and remote programming."
        : "مؤسسة عبدالله لصيانة وتركيب الكراج والشتر في جدة - المملكة العربية السعودية. اتصل بنا على 0567300158 لخدمات تركيب وصيانة أبواب الكراج والشتر الكهربائي.";
  }
  const logo = document.querySelector(".brand-logo");
  if (logo) {
    logo.alt = isEnglish
      ? "Abdullah Establishment for Garage Door and Shutter Maintenance and Installation"
      : "مؤسسة عبدالله لصيانة وتركيب الكراج والشتر";
  }
  const heroImage = document.querySelector(".hero > img");
  if (heroImage) {
    heroImage.alt = isEnglish
      ? "Electric shutter and garage door installation in Jeddah"
      : "تركيب شتر كهربائي وأبواب كراج في جدة";
  }
  translateText(isEnglish ? "en" : "ar");
  if (langToggle) {
    langToggle.textContent = isEnglish ? "العربية" : "English";
    langToggle.setAttribute("aria-label", isEnglish ? "Switch to Arabic" : "Switch to English");
  }
  refreshContactLinks(isEnglish ? "en" : "ar");
  localStorage.setItem("siteLanguage", isEnglish ? "en" : "ar");
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(document.documentElement.lang === "en" ? "ar" : "en");
  });
}

applyLanguage(localStorage.getItem("siteLanguage") === "en" ? "en" : "ar");
