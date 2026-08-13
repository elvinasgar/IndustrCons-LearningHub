/* ============================================================
   IndustrCons Learning Hub — App Shell
   Handles: header/footer injection, i18n text swap, language
   toggle, and localStorage-based progress tracking.
   ============================================================ */

const PROGRESS_KEY = "ic_lh_progress"; // { subjectId: { taskId: true, ... } }

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch (e) { return {}; }
}
function setTaskDone(subjectId, taskId, done) {
  const p = getProgress();
  p[subjectId] = p[subjectId] || {};
  if (done) p[subjectId][taskId] = true; else delete p[subjectId][taskId];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function isTaskDone(subjectId, taskId) {
  const p = getProgress();
  return !!(p[subjectId] && p[subjectId][taskId]);
}
function subjectCompletion(subjectId, totalTasks) {
  const p = getProgress();
  const done = p[subjectId] ? Object.keys(p[subjectId]).length : 0;
  return totalTasks ? Math.round((done / totalTasks) * 100) : 0;
}

function renderHeader(active) {
  const lang = getLang();
  document.getElementById("site-header").innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark" aria-hidden="true"></span>
        <span data-i18n="brand"></span>
      </a>
      <nav class="main-nav">
        <a href="index.html" data-i18n="nav_home" ${active==='home'?'style="color:var(--cyan)"':''}></a>
        <a href="programs.html" data-i18n="nav_programs" ${active==='programs'?'style="color:var(--cyan)"':''}></a>
        <a href="#" data-i18n="nav_internship"></a>
        <div class="lang-toggle">
          <button data-lang="az" class="${lang==='az'?'active':''}">AZ</button>
          <button data-lang="en" class="${lang==='en'?'active':''}">EN</button>
        </div>
      </nav>
    </div>`;
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => { setLang(btn.dataset.lang); location.reload(); });
  });
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="wrap">
      <div class="foot-brand" data-i18n="brand"></div>
      <div class="foot-note" data-i18n="footer_note"></div>
    </div>`;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

function difficultyLabel(d) { return t("difficulty_" + d); }

function initShell(active) {
  renderHeader(active);
  renderFooter();
  applyI18n();
}
