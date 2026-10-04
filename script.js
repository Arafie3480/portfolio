// ========================================
// READING PROGRESS BAR
// ========================================

const progressBar = document.querySelector('.reading-progress');

function updateProgressBar() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateProgressBar, { passive: true });
window.addEventListener('resize', updateProgressBar);
updateProgressBar();

const projects = {
  cafe: {
    index: "01 / DESKTOP SOFTWARE",
    title: "کافه صفر؛ مدیریت سفارش و حسابداری",
    description: "یک برنامه دسکتاپ فارسی برای کارهای روزانه کافه. رابط با Tkinter ساخته شده و منطق سفارش، مشتری و حسابداری در سرویس‌های جداگانه روی پایگاه داده SQLite قرار دارد.",
    type: "نرم‌افزار دسکتاپ · مخزن عمومی",
    features: ["ثبت سفارش و صف سفارش‌های در حال آماده‌سازی", "مدیریت مشتری، نسیه و امتیاز وفاداری", "ثبت هزینه و خلاصه فروش و سود روزانه"],
    tags: ["Python", "Tkinter", "SQLite"],
    url: "https://github.com/Arafie3480/cafe-zero-pos"
  },
  mahan: {
    index: "02 / INTERFACE",
    title: "رابط وب هواپیمایی",
    description: "یک صفحه تمرینی مستقل با موضوع سفر هوایی. در این نمونه، بخش‌های معرفی، جست‌وجوی پرواز، مقصدها و کارت‌های اطلاعات سفر با HTML و CSS پیاده‌سازی شده‌اند. دکمه‌های رزرو، سامانه رزرو واقعی نیستند.",
    type: "پیاده‌سازی رابط · تمرین مستقل",
    features: ["صفحه معرفی و مسیرهای پروازی", "چیدمان بخش جست‌وجو و کارت‌های مقصد", "استایل اختصاصی و تصاویر پروژه"],
    tags: ["HTML", "CSS", "UI"]
  },
  snapp: {
    index: "03 / INTERFACE",
    title: "بازآفرینی رابط اسنپ",
    description: "بازآفرینی تمرینی صفحه معرفی یک سوپراپلیکیشن با تمرکز بر چیدمان راست‌به‌چپ، بخش معرفی خدمات و سلسله‌مراتب محتوای فارسی. این پروژه وابستگی رسمی به اسنپ ندارد.",
    type: "بازآفرینی رابط · تمرین مستقل",
    features: ["صفحه معرفی و خدمات", "چیدمان فارسی راست‌به‌چپ", "فونت‌ها و استایل‌های محلی پروژه"],
    tags: ["HTML", "CSS", "RTL"]
  },
  weather: {
    index: "04 / INTERACTIVE",
    title: "اپ هواشناسی",
    description: "تمرینی برای کار با داده‌های آب‌وهوا در مرورگر؛ کاربر شهر را جست‌وجو می‌کند و رابط، وضعیت فعلی و پیش‌بینی را از سرویس‌های هواشناسی دریافت و نمایش می‌دهد.",
    type: "اپ تعاملی · پروژه تمرینی",
    features: ["جست‌وجوی شهر", "دریافت داده با Fetch API", "نمایش وضعیت فعلی و پیش‌بینی"],
    tags: ["JavaScript", "API", "CSS"]
  },
  shop: {
    index: "05 / INTERACTIVE",
    title: "فهرست محصولات",
    description: "یک صفحه محصول تمرینی با دسته‌بندی‌های مختلف. جست‌وجوی متنی و دکمه‌های فیلتر، محصولات قابل نمایش را در همان صفحه تغییر می‌دهند.",
    type: "تعامل رابط · پروژه تمرینی",
    features: ["نمایش کارت‌های محصول", "جست‌وجوی متنی", "فیلتر بر اساس دسته‌بندی"],
    tags: ["JavaScript", "DOM", "Filtering"]
  },
  game: {
    index: "06 / INTERACTIVE",
    title: "بازی دوز",
    description: "پیاده‌سازی بازی دوز در مرورگر با مدیریت نوبت دو بازیکن، تشخیص برد یا تساوی و شمارش نتیجه دورها.",
    type: "بازی مرورگر · پروژه تمرینی",
    features: ["مدیریت نوبت بازیکنان", "بررسی حالت‌های برد و تساوی", "ثبت تعداد بردها و مساوی‌ها"],
    tags: ["JavaScript", "Game Logic", "DOM"]
  }
};

const designButtons = [...document.querySelectorAll("button[data-design]")];
const availableDesigns = new Set(designButtons.map((button) => button.dataset.design));
const designColors = { studio: "#141a1e", editorial: "#f5f1e9", electric: "#0a1428" };
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function selectDesign(design) {
  if (!availableDesigns.has(design)) return;
  document.body.dataset.design = design;
  if (themeColorMeta) themeColorMeta.content = designColors[design];
  designButtons.forEach((button) => {
    const selected = button.dataset.design === design;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  try { localStorage.setItem("portfolio-design", design); } catch (error) {}
}

let savedDesign = "electric";
try { savedDesign = localStorage.getItem("portfolio-design") || "electric"; } catch (error) {}
selectDesign(availableDesigns.has(savedDesign) ? savedDesign : "electric");
designButtons.forEach((button) => button.addEventListener("click", () => selectDesign(button.dataset.design)));

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
const projectResults = document.querySelector("#project-results");
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
  if (projectResults) {
    const visibleCount = [...cards].filter((card) => !card.hidden).length;
    projectResults.textContent = `${projectNumberFormat.format(visibleCount)} پروژه برای بررسی`;
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

const projectDialogEnglish = {
  cafe: { index: '01 / DESKTOP SOFTWARE', title: 'Cafe Zero ? orders & accounting', description: 'Desktop software for managing cafe orders, customers, credit and daily expenses.', type: 'Desktop software ? Public repository', features: ['Order registration and preparation queue', 'Customer, credit and loyalty management', 'Expense tracking and daily sales summary'] },
  mahan: { index: '02 / INTERFACE', title: 'Airline web interface', description: 'An independent travel interface exercise with flight search, destinations and responsive information cards.', type: 'Web interface ? Independent exercise', features: ['Intro page and flight routes', 'Search layout and destination cards', 'Custom styling and project visuals'] },
  snapp: { index: '03 / INTERFACE', title: 'Snapp interface recreation', description: 'A study in Persian content hierarchy, RTL layout and service presentation.', type: 'Interface recreation ? Independent exercise', features: ['Service introduction page', 'Persian RTL content hierarchy', 'Local project fonts and styles'] },
  weather: { index: '04 / INTERACTIVE', title: 'Weather app', description: 'An interactive weather experience with city search and current forecast presentation.', type: 'Interactive app ? Practice project', features: ['City search flow', 'Current weather and forecast cards', 'API-ready interaction patterns'] },
  shop: { index: '05 / WEB INTERACTION', title: 'Product catalogue', description: 'A searchable product list with category filtering and practical DOM interactions.', type: 'Web interaction \u00b7 Practice project', features: ['Text search', 'Category filters', 'Responsive product presentation'] },
  game: { index: '06 / BROWSER GAME', title: 'Tic-tac-toe game', description: 'A two-player browser game with turn management, win detection and round results.', type: 'Browser game \u00b7 Practice project', features: ['Turn management', 'Winner detection', 'Round result tracking'] }
};

function openProjectDialog(trigger) {
  const projectKey = trigger.dataset.project;
  const project = document.body.dataset.language === "en" ? projectDialogEnglish[projectKey] : projects[projectKey];
  if (!project || !dialog || !closeButton) return;

  lastTrigger = trigger;
  document.querySelector("#dialog-index").textContent = project.index;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-type").textContent = project.type;
  document.querySelector("#dialog-features").replaceChildren(...createListItems(project.features, "li"));
  document.querySelector("#dialog-tags").replaceChildren(...createListItems(project.tags, "span"));

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
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "بستن فهرست" : "باز کردن فهرست");
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

const sectionLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];
const navigableSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setActiveSection(sectionId) {
  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function updateActiveSection() {
  const marker = window.scrollY + window.innerHeight * 0.28;
  const visibleSections = navigableSections.filter((section) => section.offsetTop <= marker);
  const currentSection = visibleSections[visibleSections.length - 1];
  setActiveSection(currentSection?.id || '');
}

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// ========================================
// SKILLS SECTION ANIMATION
// ========================================

const skillItems = document.querySelectorAll('.skill-item');

function initializeSkills() {
  const skillsObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }) : null;

  skillItems.forEach((item) => {
    const progress = item.querySelector('.skill-progress');
    if (!progress) return;
    progress.style.setProperty('--progress', `${progress.dataset.progress}%`);
    if (skillsObserver) skillsObserver.observe(item);
    else item.classList.add('animate-in');
  });
}

initializeSkills();

function initializeScrollReveals() {
  const revealTargets = [...document.querySelectorAll(
    '.section-heading, .project-card, .about-grid, .approach-item, .contact-panel, .live-editor-container'
  )];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!revealTargets.length || reduceMotion || !('IntersectionObserver' in window)) return;

  revealTargets.forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
  });

  document.documentElement.classList.add('reveal-enabled');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

initializeScrollReveals();

// ========================================
// LIVE CODE EDITOR
// ========================================

const editorTabs = document.querySelectorAll('.editor-tab');
const editorPanels = document.querySelectorAll('.editor-panel');
const runButton = document.querySelector('.editor-run-btn');
const previewFrame = document.getElementById('preview-frame');

const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');

function setActiveEditorTab(activeTab) {
  const language = activeTab.dataset.lang;
  editorTabs.forEach((tab) => {
    const isActive = tab === activeTab;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });
  editorPanels.forEach((panel) => panel.classList.remove('active'));
  document.querySelector(`.editor-panel[data-lang="${language}"]`)?.classList.add('active');
}

editorTabs.forEach((tab) => tab.addEventListener('click', () => setActiveEditorTab(tab)));

function runCode() {
  if (!htmlEditor || !cssEditor || !jsEditor || !previewFrame) return;
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value.replace(/<\/style/gi, '<\\/style')}</style>`;
  const js = `<script>${jsEditor.value.replace(/<\/script/gi, '<\\/script')}<\/script>`;
  const withCss = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `${css}</head>`) : `${html}\n${css}`;
  previewFrame.srcdoc = /<\/body>/i.test(withCss) ? withCss.replace(/<\/body>/i, `${js}</body>`) : `${withCss}\n${js}`;
}

if (runButton) {
  runButton.addEventListener('click', () => runCode());
}

runCode();

let previewTimer;
[htmlEditor, cssEditor, jsEditor].filter(Boolean).forEach((editor) => {
  editor.addEventListener('input', () => {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(runCode, 350);
  });
});

// Keyboard shortcut: Ctrl+Enter to run
[htmlEditor, cssEditor, jsEditor].filter(Boolean).forEach((editor) => {
  editor.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      clearTimeout(previewTimer);
      runCode();
    }
  });
});

// ========================================
// BILINGUAL INTERFACE
// ========================================

const languageToggle = document.querySelector('.language-toggle');
const languageStorageKey = 'portfolio-language';
const englishText = {
  '.skip-link': 'Skip to main content',
  '.desktop-nav a[href="#work"]': 'Selected work',
  '.desktop-nav a[href="#about"]': 'About me',
  '.desktop-nav a[href="#approach"]': 'Approach',
  '.nav-contact': 'Start a project ↗',
  '.mobile-nav a[href="#work"]': 'Selected work',
  '.mobile-nav a[href="#about"]': 'About me',
  '.mobile-nav a[href="#approach"]': 'Approach',
  '.mobile-nav a[href="#contact"]': 'Start a project',
  '.hero-eyebrow': 'Amirhossein Mohammadrafie · Software Designer & Developer',
  '.hero h1': 'I think.<br><em>I design. I build.</em>',
  '.hero-copy>p': 'From web interfaces to practical software, I turn each project into a precise, useful and memorable experience.',
  '.hero-actions .button': 'View selected work ↙',
  '.hero-actions .text-link': 'More about me ←',
  '.scroll-mark': 'Scroll down ↓',
  '.live-editor-section .section-kicker': 'LIVE CODE · TRY IT YOURSELF',
  '#live-code-title': 'Write code. See the result.',
  '.live-editor-section .section-heading p': 'An interactive editor that renders your changes instantly.',
  '.preview-label': 'Live preview',
  '.skills-section .section-kicker': 'SKILLS · WHAT I USE',
  '#skills-title': 'Web development, with intention.',
  '.work-section .section-kicker': '01 / SELECTED WORK · A CURATED SELECTION',
  '#work-title': 'A few projects,<br><em>a few different experiences.</em>',
  '.work-section .section-heading p': 'From a cafe management tool to web interfaces and interactive experiments, these projects show how I learn and build.',
  '.filter[data-filter="all"]': 'All projects 06',
  '.filter[data-filter="software"]': 'Software',
  '.filter[data-filter="interface"]': 'Interface design',
  '.filter[data-filter="javascript"]': 'JavaScript',
  '#project-results': '6 projects to explore',
  '.project-note': 'These cards are visual representations of selected work. Named projects are independent recreations and exercises, not official collaborations with the referenced brands.',
  '.about-section .section-kicker': '02 / ABOUT ME · A LITTLE CONTEXT',
  '#about-title': 'Curiosity is the foundation<br><em>of building.</em>',
  '.about-lead': 'Hi, I’m Amirhossein — a software engineering student who enjoys designing websites and building useful software.',
  '.about-content>p:not(.about-lead)': 'I balance visual clarity with reliable implementation. Learning across web interfaces, application logic and data is an important part of my path.',
  '.skills-block h3': 'Tools and skills',
  '.about-footnote': 'Currently studying Computer Engineering · Islamic Azad University · Since 2022',
  '.approach-section .section-kicker': '03 / APPROACH · HOW I WORK',
  '#approach-title': 'A good question leads<br><em>to a better output.</em>',
  '.approach-heading>p': 'I understand the problem first, then shape a clear path from structure to implementation.',
  '.approach-item:nth-child(1) h3': 'Understand the problem',
  '.approach-item:nth-child(1) p': 'We define the goal, audience and project needs.',
  '.approach-item:nth-child(2) h3': 'Design the path',
  '.approach-item:nth-child(2) p': 'I shape the page structure and user experience.',
  '.approach-item:nth-child(3) h3': 'Build and review',
  '.approach-item:nth-child(3) p': 'I implement the interface and test it across screen sizes.',
  '.contact-kicker': '04 / LET’S TALK · START A PROJECT',
  '#contact-title': 'Have a project in mind?<br><em>Let’s talk.</em>',
  '.contact-panel p': 'For web design or software development, send me a message through my Karlancer profile.',
  '.contact-panel .button': 'Contact me on Karlancer ↗',
  '.site-footer p': 'Designed and developed with attention to detail.',
  '.site-footer a:last-child': 'Back to top ↑'
};

const projectEnglish = {
  cafe: ['Cafe Zero — orders & accounting', 'Desktop software for managing orders, customers, credit and daily expenses.', 'Desktop software · Public repository'],
  mahan: ['Airline web interface', 'An independent travel interface exercise with flight search, destinations and responsive layouts.', 'Web interface · Independent exercise'],
  snapp: ['Snapp interface recreation', 'A study in Persian content hierarchy, RTL layout and service presentation.', 'Interface · Independent recreation'],
  weather: ['Weather app', 'An interactive weather experience with city search and forecast presentation.', 'Interactive app · Practice project'],
  shop: ['Product catalogue', 'A searchable product list with category filtering and practical DOM interactions.', 'Web interaction · Practice project'],
  game: ['Tic-tac-toe game', 'A two-player browser game with turn management, win detection and round results.', 'Browser game · Practice project']
};

function setProjectEnglish(isEnglish) {
  document.querySelectorAll('.project-card[data-category]').forEach((card) => {
    const trigger = card.querySelector('[data-project]');
    const key = trigger?.dataset.project;
    const copy = projectEnglish[key];
    if (!copy) return;
    const title = card.querySelector('.project-heading h3');
    const description = card.querySelector('.project-card>p');
    const meta = card.querySelector('.project-meta');
    const detailButtons = card.querySelectorAll('.round-arrow span:first-child');
    const metaLabels = { cafe: '01 / SOFTWARE', mahan: '02 / INTERFACE', snapp: '03 / INTERFACE', weather: '04 / INTERACTIVE', shop: '05 / WEB INTERACTION', game: '06 / BROWSER GAME' };
    if (title && !title.dataset.faText) title.dataset.faText = title.textContent;
    if (description && !description.dataset.faText) description.dataset.faText = description.textContent;
    if (meta) {
      if (meta.firstElementChild && !meta.firstElementChild.dataset.faText) meta.firstElementChild.dataset.faText = meta.firstElementChild.textContent;
      if (meta.lastElementChild && !meta.lastElementChild.dataset.faText) meta.lastElementChild.dataset.faText = meta.lastElementChild.textContent;
    }
    detailButtons.forEach((button) => {
      if (!button.dataset.faText) button.dataset.faText = button.textContent;
    });
    if (isEnglish) {
      if (title) title.textContent = copy[0];
      if (description) description.textContent = copy[1];
      if (meta) {
        meta.firstElementChild.textContent = metaLabels[key];
        meta.lastElementChild.textContent = copy[2];
      }
      detailButtons.forEach((button) => { button.textContent = 'Project details'; });
    } else {
      if (title) title.textContent = title.dataset.faText;
      if (description) description.textContent = description.dataset.faText;
      if (meta) {
        meta.firstElementChild.textContent = meta.firstElementChild.dataset.faText;
        meta.lastElementChild.textContent = meta.lastElementChild.dataset.faText;
      }
      detailButtons.forEach((button) => { button.textContent = button.dataset.faText; });
    }
  });
}

function setLanguage(language) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'fa';
  document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
  document.body.dataset.language = language;
  document.body.classList.toggle('is-english', isEnglish);
  Object.entries(englishText).forEach(([selector, text]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    if (isEnglish) {
      if (!element.dataset.faText) element.dataset.faText = element.textContent;
      element.textContent = text;
    } else if (element.dataset.faText) {
      element.textContent = element.dataset.faText;
    }
  });
  setProjectEnglish(isEnglish);
  document.querySelectorAll('.dialog-columns>div>span').forEach((element, index) => {
    element.textContent = isEnglish ? (index === 0 ? 'Project type' : 'What was built') : (index === 0 ? '\u0646\u0648\u0639 \u067e\u0631\u0648\u0698\u0647' : '\u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc');
  });
  const dialogSource = document.querySelector('#dialog-source');
  if (dialogSource) dialogSource.innerHTML = isEnglish ? 'View code on GitHub <span aria-hidden=\"true\">\u2197</span>' : '\u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u062f \u062f\u0631 GitHub <span aria-hidden=\"true\">\u2197</span>';
  const dialogNote = document.querySelector('.dialog-note');
  if (dialogNote) dialogNote.textContent = isEnglish ? 'Details are based on the portfolio files and linked repository.' : '\u0627\u06cc\u0646 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u0631 \u0627\u0633\u0627\u0633 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647\u200c\u06a9\u0627\u0631 \u0648 \u0645\u062e\u0632\u0646 \u0627\u0631\u0627\u0626\u0647\u200c\u0634\u062f\u0647 \u0646\u0648\u0634\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f.';
  languageToggle?.setAttribute('aria-pressed', String(isEnglish));
  if (languageToggle) languageToggle.setAttribute('aria-label', isEnglish ? 'Switch to Persian' : 'Switch to English');
  try { localStorage.setItem(languageStorageKey, language); } catch (error) {}
  updateActiveSection();
}

let savedLanguage = 'fa';
try { savedLanguage = localStorage.getItem(languageStorageKey) || 'fa'; } catch (error) {}
setLanguage(savedLanguage);
languageToggle?.addEventListener('click', () => setLanguage(document.body.dataset.language === 'en' ? 'fa' : 'en'));
