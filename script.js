const progressBar = document.querySelector(".reading-progress");

function updateProgressBar() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgressBar, { passive: true });
window.addEventListener("resize", updateProgressBar);
updateProgressBar();

document.body.dataset.design = "studio";
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
if (themeColorMeta) themeColorMeta.content = "#141a1e";
try { localStorage.removeItem("portfolio-design"); } catch (error) {}

const projects = {
  cafe: {
    index: "01 / DESKTOP SOFTWARE",
    title: "کافه صفر؛ مدیریت سفارش و حسابداری",
    description: "نرم‌افزار دسکتاپ فارسی برای کارهای روزانه کافه — از ثبت سفارش تا مشتری، نسیه و خلاصه مالی.",
    type: "نرم‌افزار دسکتاپ · مخزن عمومی",
    problem: "کافه‌های کوچک اغلب سفارش، نسیه و هزینه را پراکنده ثبت می‌کنند و تصویر روشنی از سود روزانه ندارند.",
    decision: "رابط Tkinter را به جریان‌های واضح سفارش، مشتری و هزینه جدا کردم و داده را روی SQLite با سرویس‌های جدا نگه داشتم.",
    outcome: "یک ابزار کاربردی فارسی با صف آماده‌سازی، وفاداری مشتری و خلاصه فروش روزانه — کد در GitHub عمومی است.",
    features: ["ثبت سفارش و صف آماده‌سازی", "مدیریت مشتری، نسیه و وفاداری", "ثبت هزینه و خلاصه فروش روزانه"],
    tags: ["Python", "Tkinter", "SQLite"],
    url: "https://github.com/Arafie3480/cafe-zero-pos",
    deep: true
  },
  mahan: {
    index: "02 / INTERFACE",
    title: "رابط وب هواپیمایی",
    description: "تمرین مستقل رابط سفر هوایی با معرفی، جست‌وجوی پرواز و کارت مقصدها.",
    type: "پیاده‌سازی رابط · تمرین مستقل",
    problem: "صفحه‌های سفر اغلب یا شلوغ‌اند یا سلسله‌مراتب بصری ضعیفی دارند و مسیر کاربر برای کشف مقصد گم می‌شود.",
    decision: "هیرو تصویری قوی، ناوبری ساده و بلوک‌های جست‌وجو/مقصد را با HTML و CSS واکنش‌گرا ساختم — بدون ادعای رزرو واقعی.",
    outcome: "یک نمونه‌کار مستقل که حس برند سفر و چیدمان پاسخ‌گو را نشان می‌دهد؛ همکاری رسمی با هیچ ایرلاینی نیست.",
    features: ["صفحه معرفی و مسیرهای پروازی", "چیدمان جست‌وجو و کارت مقصد", "استایل و تصاویر اختصاصی"],
    tags: ["HTML", "CSS", "UI"],
    deep: true
  },
  snapp: {
    index: "03 / INTERFACE",
    title: "بازآفرینی رابط اسنپ",
    description: "بازآفرینی تمرینی صفحه معرفی با تمرکز بر RTL و سلسله‌مراتب فارسی.",
    type: "بازآفرینی رابط · تمرین مستقل",
    features: ["صفحه معرفی خدمات", "چیدمان فارسی RTL", "فونت و استایل محلی"],
    tags: ["HTML", "CSS", "RTL"],
    deep: false
  },
  weather: {
    index: "04 / INTERACTIVE",
    title: "اپ هواشناسی",
    description: "جست‌وجوی شهر و نمایش وضعیت فعلی و پیش‌بینی با داده از API.",
    type: "اپ تعاملی · پروژه تمرینی",
    problem: "نمایش دادهٔ آب‌وهوا باید سریع، خوانا و قابل جست‌وجو باشد بدون شلوغی کارت‌ها.",
    decision: "جریان جست‌وجو → وضعیت فعلی → پیش‌بینی چندروزه را با Fetch API و UI شفاف پیاده کردم.",
    outcome: "تمرینی کامل از تعامل مرورگر و دادهٔ زنده که الگوی کارت و بازخورد بارگذاری را تمرین می‌کند.",
    features: ["جست‌وجوی شهر", "Fetch API", "وضعیت فعلی و پیش‌بینی"],
    tags: ["JavaScript", "API", "CSS"],
    deep: true
  },
  shop: {
    index: "05 / INTERACTIVE",
    title: "فهرست محصولات",
    description: "فهرست محصول با جست‌وجوی متنی و فیلتر دسته‌بندی در همان صفحه.",
    type: "تعامل رابط · پروژه تمرینی",
    features: ["کارت محصول", "جست‌وجوی متنی", "فیلتر دسته"],
    tags: ["JavaScript", "DOM", "Filtering"],
    deep: false
  },
  game: {
    index: "06 / INTERACTIVE",
    title: "بازی دوز",
    description: "بازی دو نفره با مدیریت نوبت، تشخیص برد و ثبت نتیجه دورها.",
    type: "بازی مرورگر · پروژه تمرینی",
    features: ["مدیریت نوبت", "تشخیص برد/تساوی", "ثبت نتیجه دورها"],
    tags: ["JavaScript", "Game Logic", "DOM"],
    deep: false
  }
};

const projectDialogEnglish = {
  cafe: {
    index: "01 / DESKTOP SOFTWARE",
    title: "Cafe Zero — orders & accounting",
    description: "Persian desktop software for daily cafe operations — orders, credit, and financial summary.",
    type: "Desktop software · Public repository",
    problem: "Small cafes often track orders, credit and expenses in scattered notes, with no clear daily profit view.",
    decision: "I split the Tkinter UI into clear order, customer and expense flows, and kept data in SQLite behind separate services.",
    outcome: "A practical Persian tool with a prep queue, loyalty, and daily sales summary — source is public on GitHub.",
    features: ["Order registration and prep queue", "Customer, credit and loyalty", "Expense tracking and daily summary"],
    tags: ["Python", "Tkinter", "SQLite"],
    url: "https://github.com/Arafie3480/cafe-zero-pos",
    deep: true
  },
  mahan: {
    index: "02 / INTERFACE",
    title: "Airline web interface",
    description: "Independent travel UI study with intro, flight search and destination cards.",
    type: "Web interface · Independent exercise",
    problem: "Travel pages often feel crowded or lack hierarchy, so the path to explore destinations gets lost.",
    decision: "I built a strong visual hero, simple navigation and search/destination blocks in responsive HTML/CSS — no real booking claims.",
    outcome: "An independent sample that shows travel-brand atmosphere and responsive layout; not an official airline collaboration.",
    features: ["Intro and flight routes", "Search layout and destination cards", "Custom styling and visuals"],
    tags: ["HTML", "CSS", "UI"],
    deep: true
  },
  snapp: {
    index: "03 / INTERFACE",
    title: "Snapp interface recreation",
    description: "A study in Persian content hierarchy and RTL service presentation.",
    type: "Interface recreation · Independent exercise",
    features: ["Service introduction page", "Persian RTL hierarchy", "Local fonts and styles"],
    tags: ["HTML", "CSS", "RTL"],
    deep: false
  },
  weather: {
    index: "04 / INTERACTIVE",
    title: "Weather app",
    description: "City search with current conditions and forecast from a weather API.",
    type: "Interactive app · Practice project",
    problem: "Weather data needs to stay fast and readable without overcrowding the cards.",
    decision: "I wired search → current conditions → multi-day forecast with Fetch API and a clear card UI.",
    outcome: "A complete browser-interaction exercise covering live data, cards and loading feedback patterns.",
    features: ["City search", "Fetch API", "Current weather and forecast"],
    tags: ["JavaScript", "API", "CSS"],
    deep: true
  },
  shop: {
    index: "05 / WEB INTERACTION",
    title: "Product catalogue",
    description: "A searchable product list with category filtering on the same page.",
    type: "Web interaction · Practice project",
    features: ["Product cards", "Text search", "Category filters"],
    tags: ["JavaScript", "DOM", "Filtering"],
    deep: false
  },
  game: {
    index: "06 / BROWSER GAME",
    title: "Tic-tac-toe game",
    description: "Two-player browser game with turns, win detection and round tracking.",
    type: "Browser game · Practice project",
    features: ["Turn management", "Win/draw detection", "Round result tracking"],
    tags: ["JavaScript", "Game Logic", "DOM"],
    deep: false
  }
};

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
const projectResults = document.querySelector("#project-results");
const featuredLabel = document.querySelector("#featured-label");
const moreWork = document.querySelector("#more-work");
const projectNumberFormat = new Intl.NumberFormat("fa-IR");

function applyProjectFilter(category, activeButton) {
  filters.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  cards.forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });

  const featuredVisible = [...document.querySelectorAll(".featured-grid .project-card")].some((card) => !card.hidden);
  const moreVisible = [...document.querySelectorAll(".more-grid .project-card")].some((card) => !card.hidden);
  if (featuredLabel) featuredLabel.hidden = !featuredVisible;
  if (moreWork) moreWork.hidden = !moreVisible;

  if (projectResults) {
    const visibleCount = [...cards].filter((card) => !card.hidden).length;
    const isEnglish = document.body.dataset.language === "en";
    const countLabel = isEnglish
      ? new Intl.NumberFormat("en-US").format(visibleCount)
      : projectNumberFormat.format(visibleCount);
    projectResults.textContent = isEnglish
      ? `${countLabel} project${visibleCount === 1 ? "" : "s"} to explore`
      : `${countLabel} پروژه برای بررسی`;
  }
  updateProgressBar();
}

filters.forEach((button) => {
  button.addEventListener("click", () => applyProjectFilter(button.dataset.filter, button));
});

const dialog = document.querySelector("#project-dialog");
const closeButton = dialog?.querySelector(".dialog-close");
let lastTrigger = null;

function createListItems(items, tagName) {
  return items.map((value) => {
    const item = document.createElement(tagName);
    item.textContent = value;
    return item;
  });
}

function openProjectDialog(trigger) {
  const projectKey = trigger.dataset.project;
  const isEnglish = document.body.dataset.language === "en";
  const project = isEnglish ? projectDialogEnglish[projectKey] : projects[projectKey];
  if (!project || !dialog || !closeButton) return;

  lastTrigger = trigger;
  document.querySelector("#dialog-index").textContent = project.index;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-type").textContent = project.type;
  document.querySelector("#dialog-features").replaceChildren(...createListItems(project.features, "li"));
  document.querySelector("#dialog-tags").replaceChildren(...createListItems(project.tags, "span"));

  const caseBlock = document.querySelector("#dialog-case");
  const problem = document.querySelector("#dialog-problem");
  const decision = document.querySelector("#dialog-decision");
  const outcome = document.querySelector("#dialog-outcome");
  const problemLabel = document.querySelector("#dialog-problem-label");
  const decisionLabel = document.querySelector("#dialog-decision-label");
  const outcomeLabel = document.querySelector("#dialog-outcome-label");

  if (caseBlock && project.deep && project.problem) {
    caseBlock.hidden = false;
    if (problemLabel) problemLabel.textContent = isEnglish ? "Problem" : "مسئله";
    if (decisionLabel) decisionLabel.textContent = isEnglish ? "Decision" : "تصمیم";
    if (outcomeLabel) outcomeLabel.textContent = isEnglish ? "Outcome" : "نتیجه";
    if (problem) problem.textContent = project.problem;
    if (decision) decision.textContent = project.decision;
    if (outcome) outcome.textContent = project.outcome;
  } else if (caseBlock) {
    caseBlock.hidden = true;
  }

  const sourceLink = document.querySelector("#dialog-source");
  if (sourceLink) {
    sourceLink.hidden = !project.url;
    if (project.url) sourceLink.href = project.url;
    else sourceLink.removeAttribute("href");
  }

  dialog.showModal();
  closeButton.focus();
}

if (dialog && closeButton) {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProjectDialog(button));
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => lastTrigger?.focus());
}

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function setMobileMenu(isOpen) {
  if (!menuButton || !mobileNav) return;
  const isEnglish = document.body.dataset.language === "en";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? (isEnglish ? "Close menu" : "بستن فهرست")
      : (isEnglish ? "Open menu" : "باز کردن فهرست")
  );
  mobileNav.hidden = !isOpen;
}

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) setMobileMenu(false);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (menuButton?.getAttribute("aria-expanded") === "true") setMobileMenu(false);
  if (dialog?.open) dialog.close();
});

const sectionLinks = [...document.querySelectorAll(".desktop-nav a, .mobile-nav a")];
const navigableSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveSection(sectionId) {
  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function updateActiveSection() {
  const marker = window.scrollY + window.innerHeight * 0.28;
  const visibleSections = navigableSections.filter((section) => section.offsetTop <= marker);
  const currentSection = visibleSections[visibleSections.length - 1];
  setActiveSection(currentSection?.id || "");
}

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

function initializeScrollReveals() {
  const revealTargets = [...document.querySelectorAll(
    ".section-heading, .project-card, .skill-chip, .trust-list li, .about-grid, .approach-item, .contact-panel, .live-editor-container"
  )];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!revealTargets.length || reduceMotion || !("IntersectionObserver" in window)) return;

  revealTargets.forEach((element, index) => {
    element.dataset.reveal = "";
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });
  document.documentElement.classList.add("reveal-enabled");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

initializeScrollReveals();

const editorTabs = document.querySelectorAll(".editor-tab");
const editorPanels = document.querySelectorAll(".editor-panel");
const runButton = document.querySelector(".editor-run-btn");
const previewFrame = document.getElementById("preview-frame");
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");

function setActiveEditorTab(activeTab) {
  const language = activeTab.dataset.lang;
  editorTabs.forEach((tab) => {
    const isActive = tab === activeTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  editorPanels.forEach((panel) => panel.classList.remove("active"));
  document.querySelector(`.editor-panel[data-lang="${language}"]`)?.classList.add("active");
}

editorTabs.forEach((tab) => tab.addEventListener("click", () => setActiveEditorTab(tab)));

function runCode() {
  if (!htmlEditor || !cssEditor || !jsEditor || !previewFrame) return;
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value.replace(/<\/style/gi, "<\\/style")}</style>`;
  const js = `<script>${jsEditor.value.replace(/<\/script/gi, "<\\/script")}</${"script"}>`;
  const withCss = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `${css}</head>`) : `${html}\n${css}`;
  previewFrame.srcdoc = /<\/body>/i.test(withCss) ? withCss.replace(/<\/body>/i, `${js}</body>`) : `${withCss}\n${js}`;
}

if (runButton) runButton.addEventListener("click", () => runCode());
runCode();

let previewTimer;
[htmlEditor, cssEditor, jsEditor].filter(Boolean).forEach((editor) => {
  editor.addEventListener("input", () => {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(runCode, 350);
  });
  editor.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      clearTimeout(previewTimer);
      runCode();
    }
  });
});

const liveProofToggle = document.querySelector(".live-proof-toggle");
const liveProofPanel = document.querySelector("#live-proof-panel");

function setLiveProofExpanded(isExpanded) {
  if (!liveProofToggle || !liveProofPanel) return;
  const isEnglish = document.body.dataset.language === "en";
  liveProofToggle.setAttribute("aria-expanded", String(isExpanded));
  liveProofPanel.classList.toggle("is-collapsed", !isExpanded);
  liveProofToggle.textContent = isExpanded
    ? (isEnglish ? "Hide editor" : "بستن ویرایشگر")
    : (isEnglish ? "Show editor" : "نمایش ویرایشگر");
}

if (liveProofToggle && liveProofPanel) {
  const preferCollapsed = window.matchMedia("(max-width: 800px)").matches;
  setLiveProofExpanded(!preferCollapsed);
  liveProofToggle.addEventListener("click", () => {
    const isExpanded = liveProofToggle.getAttribute("aria-expanded") === "true";
    setLiveProofExpanded(!isExpanded);
  });
}

const languageToggle = document.querySelector(".language-toggle");
const languageStorageKey = "portfolio-language";

const englishText = {
  ".skip-link": "Skip to main content",
  '.desktop-nav a[href="#work"]': "Selected work",
  '.desktop-nav a[href="#about"]': "About me",
  '.desktop-nav a[href="#approach"]': "Approach",
  ".nav-contact": 'Start a project <span aria-hidden="true">↗</span>',
  '.mobile-nav a[href="#work"]': "Selected work",
  '.mobile-nav a[href="#about"]': "About me",
  '.mobile-nav a[href="#approach"]': "Approach",
  '.mobile-nav a[href="#contact"]': "Start a project",
  ".hero-brand": 'Dev By Amir<span aria-hidden="true">.</span>',
  ".hero-eyebrow": '<span class="status-dot"></span> Open for new projects <span class="eyebrow-line"></span> Design &amp; development',
  "#hero-title": 'Precise digital experiences<br />for web and software<span class="period">✳</span>',
  ".hero-lead": "From idea to interface and logic — I build Persian/RTL interfaces and practical software with clear structure and careful detail.",
  ".hero-actions .button": 'View selected work <span aria-hidden="true">↙</span>',
  ".hero-actions .text-link": 'Start a project <span aria-hidden="true">←</span>',
  ".scroll-mark": 'Scroll down <span aria-hidden="true">↓</span>',
  ".trust-list li:nth-child(1) strong": "Status",
  ".trust-list li:nth-child(1) span": "Open for a new project",
  ".trust-list li:nth-child(2) strong": "Focus",
  ".trust-list li:nth-child(2) span": "Persian web · RTL · practical software",
  ".trust-list li:nth-child(3) strong": "Karlancer",
  ".trust-list li:nth-child(3) a": "Freelance profile ↗",
  ".trust-list li:nth-child(4) strong": "GitHub",
  ".trust-list li:nth-child(4) a": "Public repositories ↗",
  ".work-section .section-kicker": '<span>01 / SELECTED WORK</span><span class="tiny-line"></span> Selected work',
  "#work-title": 'Three case studies, <em>then practice work.</em>',
  ".work-section .section-heading p": "Start with the deeper builds; shorter exercises and recreations follow.",
  "#featured-label": "Primary case studies",
  "#more-work-title": "Exercises & recreations",
  ".more-work-heading p": "Shorter samples for RTL, filtering and game logic — not full case studies.",
  '.filter[data-filter="all"]': 'All projects <span>06</span>',
  '.filter[data-filter="software"]': "Software",
  '.filter[data-filter="interface"]': "Interface design",
  '.filter[data-filter="javascript"]': "JavaScript",
  ".project-note": "Card previews are visual representations. Named brand projects are independent recreations and exercises, not official collaborations.",
  ".skills-section .section-kicker": '<span>SKILLS</span><span class="tiny-line"></span> What I use',
  "#skills-title": 'Tools I actually use <em>in the work.</em>',
  ".skills-section .section-heading p": "Interface design, front-end and application logic — aligned with the projects above.",
  ".about-section .section-kicker": '<span>02 / ABOUT</span><span class="tiny-line"></span> About me',
  "#about-title": 'Curiosity is the foundation<br /><em>of building.</em>',
  ".about-lead": "Hi, I’m Amirhossein — a software engineering student who builds interfaces and tools that should look clear and work reliably.",
  ".about-content > p:not(.about-lead)": "I clarify the problem and audience first, then shape the experience structure, and finally ship with clean code and cross-size review. My focus is Persian/RTL web and practical software.",
  ".about-footnote": '<span class="footnote-number">01</span><span>Currently studying Computer Engineering<br /><small>Islamic Azad University · Since 2022</small></span>',
  ".approach-section .section-kicker": '<span>03 / APPROACH</span><span class="tiny-line"></span> How I work',
  "#approach-title": 'A good question leads<br /><em>to a better output.</em>',
  ".approach-heading > p": "I understand the problem first, then shape a clear path from structure to implementation.",
  ".approach-item:nth-child(1) h3": "Understand the problem",
  ".approach-item:nth-child(1) p": "We define the goal, audience and project needs.",
  ".approach-item:nth-child(2) h3": "Design the path",
  ".approach-item:nth-child(2) p": "I shape the page structure and user experience.",
  ".approach-item:nth-child(3) h3": "Build and review",
  ".approach-item:nth-child(3) p": "I implement the interface and test it across screen sizes.",
  ".live-editor-section .section-kicker": '<span>LIVE PROOF</span><span class="tiny-line"></span> Interaction proof',
  "#live-code-title": 'Change the code; <em>see the result.</em>',
  ".live-proof-actions > p": "A small editor to show front-end feedback speed — not a replacement for selected work.",
  ".preview-label": "Live preview",
  ".editor-run-btn": "Run",
  ".contact-kicker": '<span>04 / LET’S TALK</span><span class="tiny-line"></span> Start a project',
  "#contact-title": 'Have a project in mind?<br /><em>Let’s talk.</em>',
  ".contact-scope": "Projects I take on: Persian/RTL web design and build, product intro interfaces, and small-to-medium practical software.",
  ".contact-panel > p:not(.contact-scope)": "To start a collaboration, message me on Karlancer or use the channels below.",
  ".contact-panel .button": 'Contact me on Karlancer <span aria-hidden="true">↗</span>',
  '.contact-item[href^="mailto"] .contact-label': "Email",
  '.contact-item[href*="t.me"] .contact-label': "Telegram",
  '.contact-item[href*="instagram"] .contact-label': "Instagram",
  '.contact-item[href*="github"] .contact-label': "GitHub",
  ".site-footer p": "Designed and developed with attention to detail.",
  ".site-footer a:last-child": "Back to top ↑"
};

const projectCardEnglish = {
  cafe: {
    title: "Cafe Zero — orders & accounting",
    badge: "Case study",
    teaser: "<span>Problem</span> Scattered orders, credit and expenses — no clear daily profit view.",
    description: "Persian desktop software for orders, customers, credit and daily financial summary.",
    detail: "Case study",
    outlink: "Code on GitHub",
    caseLink: "Read case study"
  },
  mahan: {
    title: "Airline web interface",
    badge: "Case study",
    teaser: "<span>Problem</span> Weak hierarchy and a lost path to explore destinations.",
    description: "Independent travel page with hierarchy, flight search and destination cards — not an official brand collaboration.",
    detail: "Case study",
    caseLink: "Read case study"
  },
  snapp: {
    title: "Snapp interface recreation",
    badge: "Recreation",
    description: "A study in Persian content hierarchy, RTL layout and service presentation.",
    detail: "Details"
  },
  weather: {
    title: "Weather app",
    badge: "Case study",
    teaser: "<span>Problem</span> Weather data needs to be fast and readable without card clutter.",
    description: "City search with current conditions and forecast via a weather API.",
    detail: "Case study",
    caseLink: "Read case study"
  },
  shop: {
    title: "Product catalogue",
    badge: "Practice",
    description: "Product list with text search and category filtering on the same page.",
    detail: "Details"
  },
  game: {
    title: "Tic-tac-toe game",
    badge: "Practice",
    description: "Two-player game with turn management, win detection and round results.",
    detail: "Details"
  }
};

const projectAriaEnglish = {
  cafe: ["Cafe Zero case study", "Open Cafe Zero case study"],
  mahan: ["Airline interface case study", "Open airline interface case study"],
  snapp: ["Snapp recreation details", "Snapp recreation details"],
  weather: ["Weather app case study", "Open weather app case study"],
  shop: ["Product catalogue details", "Product catalogue details"],
  game: ["Tic-tac-toe details", "Tic-tac-toe details"]
};

function setProjectCardsLanguage(isEnglish) {
  document.querySelectorAll(".project-card[data-category]").forEach((card) => {
    const triggers = card.querySelectorAll("[data-project]");
    const key = triggers[0]?.dataset.project;
    const copy = projectCardEnglish[key];
    if (!copy) return;
    const title = card.querySelector(".project-heading h3");
    const badge = card.querySelector(".depth-badge");
    const teaser = card.querySelector(".case-teaser");
    const description = card.querySelector(":scope > p:not(.case-teaser)");
    const meta = card.querySelector(".project-meta");
    const detailLabel = card.querySelector(".round-arrow span:first-child");

    if (title && !title.dataset.faText) title.dataset.faText = title.textContent;
    if (badge && !badge.dataset.faText) badge.dataset.faText = badge.textContent;
    if (teaser && !teaser.dataset.faHtml) teaser.dataset.faHtml = teaser.innerHTML;
    if (description && !description.dataset.faText) description.dataset.faText = description.textContent;
    if (detailLabel && !detailLabel.dataset.faText) detailLabel.dataset.faText = detailLabel.textContent;
    if (meta?.firstElementChild && !meta.firstElementChild.dataset.faText) {
      meta.firstElementChild.dataset.faText = meta.firstElementChild.textContent;
    }
    if (meta?.lastElementChild && !meta.lastElementChild.dataset.faText) {
      meta.lastElementChild.dataset.faText = meta.lastElementChild.textContent;
    }

    triggers.forEach((button, index) => {
      if (!button.dataset.faAria) button.dataset.faAria = button.getAttribute("aria-label") || "";
      if (isEnglish && projectAriaEnglish[key]) {
        button.setAttribute("aria-label", projectAriaEnglish[key][Math.min(index, 1)]);
      } else if (button.dataset.faAria) {
        button.setAttribute("aria-label", button.dataset.faAria);
      }
    });

    const outlink = card.querySelector("a.outlink");
    const caseLink = card.querySelector("button.outlink");
    if (outlink && !outlink.dataset.faHtml) outlink.dataset.faHtml = outlink.innerHTML;
    if (caseLink && !caseLink.dataset.faHtml) caseLink.dataset.faHtml = caseLink.innerHTML;

    if (isEnglish) {
      if (title) title.textContent = copy.title;
      if (badge && copy.badge) badge.textContent = copy.badge;
      if (teaser && copy.teaser) teaser.innerHTML = copy.teaser;
      if (description) description.textContent = copy.description;
      const metaLabels = {
        cafe: ["01 / SOFTWARE", "Public GitHub repository"],
        mahan: ["02 / INTERFACE", "Independent exercise"],
        weather: ["03 / INTERACTIVE", "Deep practice project"],
        snapp: ["04 / INTERFACE", "Independent recreation"],
        shop: ["05 / WEB INTERACTION", "Practice project"],
        game: ["06 / BROWSER GAME", "Practice project"]
      };
      if (meta && metaLabels[key]) {
        meta.firstElementChild.textContent = metaLabels[key][0];
        meta.lastElementChild.textContent = metaLabels[key][1];
      }
      if (detailLabel) detailLabel.textContent = copy.detail;
      if (outlink && copy.outlink) {
        outlink.innerHTML = `${copy.outlink} <span aria-hidden="true">↗</span>`;
      }
      if (caseLink && copy.caseLink) caseLink.textContent = copy.caseLink;
    } else {
      if (title) title.textContent = title.dataset.faText;
      if (badge?.dataset.faText) badge.textContent = badge.dataset.faText;
      if (teaser?.dataset.faHtml) teaser.innerHTML = teaser.dataset.faHtml;
      if (description) description.textContent = description.dataset.faText;
      if (meta?.firstElementChild) meta.firstElementChild.textContent = meta.firstElementChild.dataset.faText;
      if (meta?.lastElementChild) meta.lastElementChild.textContent = meta.lastElementChild.dataset.faText;
      if (detailLabel) detailLabel.textContent = detailLabel.dataset.faText;
      if (outlink?.dataset.faHtml) outlink.innerHTML = outlink.dataset.faHtml;
      if (caseLink?.dataset.faHtml) caseLink.innerHTML = caseLink.dataset.faHtml;
    }
  });
}

function applyLocalizedCopy(element, text, isEnglish) {
  const usesMarkup = /<[^>]+>/.test(text);
  if (isEnglish) {
    if (!element.dataset.faHtml) element.dataset.faHtml = element.innerHTML;
    if (usesMarkup) element.innerHTML = text;
    else element.textContent = text;
    return;
  }
  if (element.dataset.faHtml) element.innerHTML = element.dataset.faHtml;
}

function setLanguage(language) {
  const isEnglish = language === "en";
  document.documentElement.lang = isEnglish ? "en" : "fa";
  document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  document.body.dataset.language = language;
  document.body.classList.toggle("is-english", isEnglish);

  Object.entries(englishText).forEach(([selector, text]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    applyLocalizedCopy(element, text, isEnglish);
  });

  document.querySelectorAll(".skill-chip small").forEach((element, index) => {
    const englishLabels = ["Interface & layout", "Browser interaction", "Web apps", "Desktop software", "Experience structure", "Version control"];
    applyLocalizedCopy(element, englishLabels[index] || element.textContent, isEnglish);
  });

  setProjectCardsLanguage(isEnglish);

  document.querySelectorAll(".dialog-columns > div > span").forEach((element, index) => {
    element.textContent = isEnglish
      ? (index === 0 ? "Project type" : "What was built")
      : (index === 0 ? "نوع پروژه" : "بخش‌های پیاده‌سازی");
  });

  const dialogSource = document.querySelector("#dialog-source");
  if (dialogSource) {
    dialogSource.innerHTML = isEnglish
      ? 'View code on GitHub <span aria-hidden="true">↗</span>'
      : 'مشاهده کد در GitHub <span aria-hidden="true">↗</span>';
  }
  const dialogNote = document.querySelector(".dialog-note");
  if (dialogNote) {
    dialogNote.textContent = isEnglish
      ? "Details are based on the portfolio files and linked repository."
      : "این توضیحات بر اساس فایل‌های نمونه‌کار و مخزن ارائه‌شده نوشته شده‌اند.";
  }

  const contactItems = [
    ['a[href^="mailto"]', "Email: rafie2002.dev@gmail.com", "ایمیل: rafie2002.dev@gmail.com"],
    ['a[href*="t.me"]', "Telegram: @AmirDev3480", "تلگرام: @AmirDev3480"],
    ['a[href*="instagram"]', "Instagram: @dev_by_amir", "اینستاگرام: @dev_by_amir"],
    ['a[href*="github"]', "GitHub: Arafie3480", "گیت‌هاب: Arafie3480"]
  ];
  contactItems.forEach(([selector, en, fa]) => {
    const link = document.querySelector(`.contact-methods ${selector}`);
    if (link) link.setAttribute("aria-label", isEnglish ? en : fa);
  });

  languageToggle?.setAttribute("aria-pressed", String(isEnglish));
  if (languageToggle) languageToggle.setAttribute("aria-label", isEnglish ? "Switch to Persian" : "Switch to English");
  if (menuButton?.getAttribute("aria-expanded") === "true") setMobileMenu(true);
  else if (menuButton) setMobileMenu(false);

  if (liveProofToggle && liveProofPanel) {
    setLiveProofExpanded(liveProofToggle.getAttribute("aria-expanded") !== "false");
  }

  try { localStorage.setItem(languageStorageKey, language); } catch (error) {}
  const activeFilter = document.querySelector(".filter.active");
  if (activeFilter) applyProjectFilter(activeFilter.dataset.filter, activeFilter);
  updateActiveSection();
}

let savedLanguage = "fa";
try { savedLanguage = localStorage.getItem(languageStorageKey) || "fa"; } catch (error) {}
setLanguage(savedLanguage);
languageToggle?.addEventListener("click", () => setLanguage(document.body.dataset.language === "en" ? "fa" : "en"));
