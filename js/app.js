/* ============================================================
   IndustrCons Skills Hub — App Shell
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
        <a href="about.html" data-i18n="nav_about" ${active==='about'?'style="color:var(--cyan)"':''}></a>
        <a href="faq.html" data-i18n="nav_faq" ${active==='faq'?'style="color:var(--cyan)"':''}></a>
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

/* ---------- Program completion & diploma ---------- */

function isSubjectComplete(subjectId) {
  const s = DB.subjects[subjectId];
  if (!s || s.stub || !s.tasks || !s.tasks.length) return false;
  const p = getProgress();
  const done = p[subjectId] ? Object.keys(p[subjectId]).length : 0;
  return done >= s.tasks.length;
}

function programCompletion(program) {
  const gradable = program.subjects.filter(sid => DB.subjects[sid] && !DB.subjects[sid].stub);
  const done = gradable.filter(isSubjectComplete);
  return {
    total: gradable.length,
    done: done.length,
    percent: gradable.length ? Math.round((done.length / gradable.length) * 100) : 0,
    complete: gradable.length > 0 && done.length === gradable.length
  };
}

const DIPLOMA_KEY = "ic_lh_diplomas"; // { programId: certId } — quick lookup for "have I already got one"
const CERT_REGISTRY_KEY = "icsh_certificates"; // { certId: { certId, verifyCode, programId, name, date, hours, level, status } }

function randCode(len) {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function getCertRegistry() {
  try { return JSON.parse(localStorage.getItem(CERT_REGISTRY_KEY)) || {}; } catch (e) { return {}; }
}
function saveCertRegistry(reg) {
  localStorage.setItem(CERT_REGISTRY_KEY, JSON.stringify(reg));
}

function getDiplomaRecord(program) {
  let links = {};
  try { links = JSON.parse(localStorage.getItem(DIPLOMA_KEY)) || {}; } catch (e) {}
  const reg = getCertRegistry();

  if (links[program.id] && reg[links[program.id]]) {
    return reg[links[program.id]];
  }

  const year = new Date().getFullYear();
  const certId = `ICSH-${program.code.split('-').pop()}-${year}-${String(Math.floor(100000 + Math.random() * 900000))}`;
  const verifyCode = `IC-VF-${randCode(4)}-${randCode(4)}`;
  const record = {
    certId, verifyCode,
    programId: program.id,
    programCode: program.code,
    name: "",
    date: new Date().toISOString(), // locked at the moment of first completion
    hours: program.hours,
    level: program.level,
    status: "ACTIVE"
  };
  reg[certId] = record;
  links[program.id] = certId;
  saveCertRegistry(reg);
  localStorage.setItem(DIPLOMA_KEY, JSON.stringify(links));
  return record;
}

function saveDiplomaName(certId, name) {
  const reg = getCertRegistry();
  if (reg[certId]) { reg[certId].name = name; saveCertRegistry(reg); }
}

function getCertById(certId) {
  const reg = getCertRegistry();
  return reg[certId] || null;
}

function formatMonthYear(isoDate, lang) {
  const d = new Date(isoDate);
  const monthsAz = ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
  const monthsEn = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const months = lang === "en" ? monthsEn : monthsAz;
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function formatFullDate(isoDate, lang) {
  const d = new Date(isoDate);
  const monthsAz = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"];
  const monthsEn = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  if (lang === "en") return `${d.getDate()} ${monthsEn[d.getMonth()]} ${d.getFullYear()}`;
  return `${d.getDate()} ${monthsAz[d.getMonth()]} ${d.getFullYear()}`;
}

function buildLinkedInPost(program, cert, lang) {
  const verifyUrl = `${location.origin}${location.pathname.replace(/certificate\.html.*$/, '')}verify.html?id=${cert.certId}`;
  if (lang === 'en') {
    return `I'm proud to share that I have successfully completed the ${program.title.en} professional learning program at IndustrCons Skills Hub.\n\nThroughout the program, I worked through subjects covering ${program.title.en.toLowerCase()} and practical project scenarios.\n\nCertificate ID: ${cert.certId}\nVerification: ${verifyUrl}\n\nI'm looking forward to applying these skills in real-world professional environments and continuing my learning journey.\n\n#IndustrCons #SkillsHub #Construction #ProfessionalDevelopment`;
  }
  return `Peşəkar inkişaf yolumda daha bir mərhələni tamamladığımı bölüşməkdən məmnunam.\n\nIndustrCons Skills Hub platformasında ${program.title.az} peşəkar təlim proqramını uğurla tamamladım.\n\nSertifikat ID: ${cert.certId}\nYoxlama: ${verifyUrl}\n\nYeni biliklərimi real peşəkar mühitdə tətbiq etməyi və inkişaf yolumu davam etdirməyi səbirsizliklə gözləyirəm.\n\n#IndustrCons #SkillsHub #İnşaat #PeşəkarİnkişafPlatforması`;
}

function initShell(active) {
  renderHeader(active);
  renderFooter();
  applyI18n();
}
