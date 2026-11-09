const translations = window.siteContent;
const translatedElements = [...document.querySelectorAll('[data-i18n]')];
for (const element of translatedElements) {
  translations.en[element.dataset.i18n] = element.innerHTML;
}

let language = localStorage.getItem('junyu-site-language') === 'zh' ? 'zh' : 'en';
let activeFilter = 'all';
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.nav-toggle');
const languageButton = document.querySelector('#language-toggle');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('.research-item')];

function updateFilterStatus() {
  const count = projects.filter(project => !project.hidden).length;
  document.querySelector('#filter-status').textContent = translations[language].filterCount.replace('{count}', count);
}

function setMenu(open) {
  header.classList.toggle('nav-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? translations[language].close : translations[language].menu;
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = translations[language].pageTitle;
  for (const element of translatedElements) {
    element.innerHTML = translations[language][element.dataset.i18n];
  }
  languageButton.innerHTML = language === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
  menuButton.textContent = header.classList.contains('nav-open') ? translations[language].close : translations[language].menu;
  document.querySelector('#contact-status').textContent = '';
  localStorage.setItem('junyu-site-language', language);
  updateFilterStatus();
}

languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
document.querySelectorAll('#primary-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('nav-open')) {
    setMenu(false);
    menuButton.focus();
  }
});

for (const button of filterButtons) {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    for (const candidate of filterButtons) {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    }
    for (const project of projects) {
      project.hidden = activeFilter !== 'all' && project.dataset.theme !== activeFilter;
    }
    updateFilterStatus();
  });
}

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#contact-status');
  try {
    await navigator.clipboard.writeText('ljylikezmn999@gmail.com');
    status.textContent = translations[language].emailCopied;
  } catch {
    status.textContent = translations[language].copyUnavailable;
  }
});

setLanguage(language);
