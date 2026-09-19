const jobs = [
  { id: 1, title: "Data Engineer", company: "CSL", location: "Melbourne", category: "it", categoryLabel: "IT & Data", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "hybrid", updated: 1, freshness: "1 天前确认", firstSeen: "首次发现 1 天前", lastChecked: "今天 09:40 确认", salary: "A$125k–145k", salaryValue: 145, status: "open", statusLabel: "招聘中", match: 96, tags: ["Python", "SQL", "AWS"], applyUrl: "https://www.csl.com/careers" },
  { id: 2, title: "Senior Construction Project Manager", company: "Lendlease", location: "Sydney", category: "construction", categoryLabel: "Construction & Property", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "onsite", updated: 1, freshness: "1 天前确认", firstSeen: "首次发现 1 天前", lastChecked: "今天 08:20 确认", salary: "A$180k–220k", salaryValue: 220, status: "open", statusLabel: "招聘中", match: 82, tags: ["Construction", "Delivery", "Safety"], applyUrl: "https://www.lendlease.com/au/careers/" },
  { id: 3, title: "AI Product Analyst", company: "Atlassian", location: "Sydney", category: "it", categoryLabel: "IT & Data", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "remote", updated: 2, freshness: "2 天前确认", firstSeen: "首次发现 2 天前", lastChecked: "今天 09:10 确认", salary: "A$135k–165k", salaryValue: 165, status: "open", statusLabel: "招聘中", match: 91, tags: ["AI", "Product", "Experimentation"], applyUrl: "https://www.atlassian.com/company/careers" },
  { id: 4, title: "Registered Nurse — Emergency", company: "Ramsay Health Care", location: "Brisbane", category: "healthcare", categoryLabel: "Healthcare & Nursing", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "onsite", updated: 2, freshness: "2 天前确认", firstSeen: "首次发现 2 天前", lastChecked: "昨天 19:30 确认", salary: "A$85k–105k", salaryValue: 105, status: "closing", statusLabel: "即将截止", match: 78, tags: ["Nursing", "Emergency", "Clinical"], applyUrl: "https://www.ramsayhealth.com.au/careers" },
  { id: 5, title: "Brand Marketing Manager", company: "Canva", location: "Sydney", category: "marketing", categoryLabel: "Marketing & Communications", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "hybrid", updated: 3, freshness: "3 天前确认", firstSeen: "首次发现 3 天前", lastChecked: "昨天 17:00 确认", salary: "A$130k–155k", salaryValue: 155, status: "open", statusLabel: "招聘中", match: 88, tags: ["Brand", "Campaigns", "Growth"], applyUrl: "https://www.canva.com/careers/" },
  { id: 6, title: "Analytics Engineer", company: "Woolworths Group", location: "Sydney", category: "it", categoryLabel: "IT & Data", source: "seek", sourceLabel: "SEEK", type: "full-time", mode: "hybrid", updated: 3, freshness: "3 天前确认", firstSeen: "首次发现 3 天前", lastChecked: "昨天 14:15 确认", salary: "A$120k–140k", salaryValue: 140, status: "open", statusLabel: "招聘中", match: 89, tags: ["dbt", "Snowflake", "Looker"], applyUrl: "https://www.woolworthsgroup.com.au/au/en/careers.html" },
  { id: 7, title: "Audit & Assurance Senior", company: "Deloitte Australia", location: "Melbourne", category: "audit", categoryLabel: "Audit & Risk", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "hybrid", updated: 4, freshness: "4 天前确认", firstSeen: "首次发现 4 天前", lastChecked: "昨天 12:30 确认", salary: "A$95k–125k", salaryValue: 125, status: "open", statusLabel: "招聘中", match: 81, tags: ["Audit", "Risk", "CA / CPA"], applyUrl: "https://www.deloitte.com/au/en/careers.html" },
  { id: 8, title: "Financial Accountant", company: "Qantas", location: "Brisbane", category: "finance", categoryLabel: "Finance & Accounting", source: "official", sourceLabel: "公司官网 / ATS", type: "contract", mode: "hybrid", updated: 4, freshness: "4 天前确认", firstSeen: "首次发现 4 天前", lastChecked: "昨天 11:00 确认", salary: "A$100k–120k", salaryValue: 120, status: "closing", statusLabel: "即将截止", match: 84, tags: ["Reporting", "Excel", "CPA"], applyUrl: "https://www.qantas.com/au/en/qantas-careers.html" },
  { id: 9, title: "Machine Learning Engineer", company: "Commonwealth Bank", location: "Sydney", category: "it", categoryLabel: "IT & Data", source: "linkedin", sourceLabel: "LinkedIn", type: "full-time", mode: "hybrid", updated: 5, freshness: "5 天前确认", firstSeen: "首次发现 5 天前", lastChecked: "前天 16:45 确认", salary: "A$145k–175k", salaryValue: 175, status: "open", statusLabel: "招聘中", match: 87, tags: ["ML", "MLOps", "GCP"], applyUrl: "https://www.commbank.com.au/about-us/careers.html" },
  { id: 10, title: "Medical Registrar", company: "Healthscope", location: "Melbourne", category: "medical", categoryLabel: "Doctors & Medical", source: "official", sourceLabel: "公司官网 / ATS", type: "contract", mode: "onsite", updated: 5, freshness: "5 天前确认", firstSeen: "首次发现 5 天前", lastChecked: "前天 13:30 确认", salary: "A$140k–190k", salaryValue: 190, status: "open", statusLabel: "招聘中", match: 75, tags: ["Medicine", "Hospital", "Registrar"], applyUrl: "https://healthscope.com.au/careers" },
  { id: 11, title: "Procurement & Supply Chain Lead", company: "BHP", location: "Perth", category: "operations", categoryLabel: "Operations & Supply Chain", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "onsite", updated: 6, freshness: "6 天前确认", firstSeen: "首次发现 6 天前", lastChecked: "前天 10:20 确认", salary: "A$150k–185k", salaryValue: 185, status: "open", statusLabel: "招聘中", match: 79, tags: ["Procurement", "Mining", "SAP"], applyUrl: "https://www.bhp.com/careers" },
  { id: 12, title: "Digital Communications Advisor", company: "Telstra", location: "Remote / Australia", category: "marketing", categoryLabel: "Marketing & Communications", source: "official", sourceLabel: "公司官网 / ATS", type: "full-time", mode: "remote", updated: 7, freshness: "7 天前确认", firstSeen: "首次发现 7 天前", lastChecked: "3 天前确认", salary: "A$100k–130k", salaryValue: 130, status: "open", statusLabel: "招聘中", match: 80, tags: ["Content", "Digital", "Stakeholder"], applyUrl: "https://www.telstra.com.au/careers" }
];

const state = { saved: new Set(), savedOnly: false, query: "", location: "all", category: "all", sort: "fresh", channels: new Set(["email"]) };
const cards = document.getElementById("cards");
const empty = document.getElementById("empty");
const meta = document.getElementById("resultsMeta");
const alertMessage = document.getElementById("alertMessage");
const selected = (type) => [...document.querySelectorAll(`[data-filter="${type}"]:checked`)].map((input) => input.value);

function matches(job) {
  const needle = state.query.trim().toLowerCase();
  const text = `${job.title} ${job.company} ${job.categoryLabel} ${job.tags.join(" ")}`.toLowerCase();
  return (!state.savedOnly || state.saved.has(job.id)) && (!needle || text.includes(needle)) &&
    (state.location === "all" || job.location === state.location) && (state.category === "all" || job.category === state.category) &&
    selected("source").includes(job.source) && selected("type").includes(job.type) && selected("status").includes(job.status) &&
    (job.mode !== "remote" || selected("mode").includes("remote"));
}

function cardMarkup(job) {
  const saved = state.saved.has(job.id);
  const mode = job.mode === "remote" ? "Remote" : job.mode === "hybrid" ? "Hybrid" : "On-site";
  return `<article class="job-card"><div class="job-top"><div><h3 class="job-title">${job.title}</h3><div class="company">${job.company} · ${job.location} · ${job.categoryLabel}</div></div><button class="save-button ${saved ? "saved" : ""}" aria-label="${saved ? "取消收藏" : "收藏"} ${job.title}" data-save="${job.id}" type="button">${saved ? "★" : "☆"}</button></div><div class="tags"><span class="tag source">${job.sourceLabel}</span><span class="tag">${mode}</span>${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div><div class="job-meta-grid"><div class="job-meta salary"><small>薪资（AUD）</small><strong>${job.salary}</strong></div><div class="job-meta status"><small>招聘状态</small><strong>${job.statusLabel}</strong></div><div class="job-meta"><small>更新时间</small><strong>${job.freshness}</strong></div></div><div class="job-bottom"><span class="freshness">${job.firstSeen} · ${job.lastChecked} · 匹配度 ${job.match}%</span><a class="apply-link" href="${job.applyUrl}" target="_blank" rel="noreferrer">官方申请 ↗</a></div></article>`;
}

function render() {
  const visible = jobs.filter(matches).sort((a, b) => state.sort === "match" ? b.match - a.match : state.sort === "salary-desc" ? b.salaryValue - a.salaryValue : a.updated - b.updated);
  cards.innerHTML = visible.map(cardMarkup).join("");
  empty.style.display = visible.length ? "none" : "block";
  meta.textContent = state.savedOnly ? `已收藏 ${visible.length} 个职位` : `找到 ${visible.length} 个演示职位 · 官网来源 ${visible.filter((job) => job.source === "official").length} 个 · ${new Set(visible.map((job) => job.category)).size} 类职业`;
  document.getElementById("savedCount").textContent = state.saved.size;
  document.getElementById("savedNav").classList.toggle("active", state.savedOnly);
  document.querySelectorAll("[data-save]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.save);
    state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
    render();
  }));
}

function applyTheme(theme) {
  if (!["sage", "paper", "midnight"].includes(theme)) return;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("jobatlas-theme", theme);
  document.querySelectorAll("[data-theme-option]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme)));
}

function syncChannels() {
  document.querySelectorAll("[data-channel]").forEach((button) => {
    const active = state.channels.has(button.dataset.channel);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-channel-field]").forEach((field) => { field.hidden = !state.channels.has(field.dataset.channelField); });
  document.getElementById("whatsappConsent").hidden = !state.channels.has("whatsapp");
}

document.querySelectorAll("[data-theme-option]").forEach((button) => button.addEventListener("click", () => applyTheme(button.dataset.themeOption)));
applyTheme(localStorage.getItem("jobatlas-theme") || "sage");
document.getElementById("searchButton").addEventListener("click", () => {
  state.query = document.getElementById("keyword").value;
  state.location = document.getElementById("location").value;
  state.category = document.getElementById("category").value;
  state.savedOnly = false;
  render();
});
document.getElementById("keyword").addEventListener("keydown", (event) => { if (event.key === "Enter") document.getElementById("searchButton").click(); });
document.getElementById("sortSelect").addEventListener("change", (event) => { state.sort = event.target.value; render(); });
document.querySelectorAll("[data-filter]").forEach((input) => input.addEventListener("change", render));
document.getElementById("resetButton").addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach((input) => { input.checked = true; });
  document.getElementById("keyword").value = "";
  document.getElementById("location").value = "all";
  document.getElementById("category").value = "all";
  Object.assign(state, { query: "", location: "all", category: "all", savedOnly: false });
  render();
});
document.getElementById("savedNav").addEventListener("click", () => { state.savedOnly = !state.savedOnly; render(); document.querySelector(".workspace").scrollIntoView({ behavior: "smooth" }); });

const alertForm = document.getElementById("alertForm");
document.getElementById("toggleAlert").addEventListener("click", (event) => {
  const opening = alertForm.hidden;
  alertForm.hidden = !opening;
  event.currentTarget.setAttribute("aria-expanded", String(opening));
  event.currentTarget.querySelector("span").textContent = opening ? "↑" : "↓";
});
document.querySelectorAll("[data-channel]").forEach((button) => button.addEventListener("click", () => {
  const channel = button.dataset.channel;
  state.channels.has(channel) ? state.channels.delete(channel) : state.channels.add(channel);
  syncChannels();
}));
syncChannels();
alertForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alertMessage.classList.remove("error");
  if (!state.channels.size) { alertMessage.textContent = "请至少选择一种提醒方式。"; alertMessage.classList.add("error"); return; }
  const fields = { email: "alertEmail", telegram: "alertTelegram", discord: "alertDiscord", whatsapp: "alertWhatsapp" };
  const missing = [...state.channels].find((channel) => !document.getElementById(fields[channel]).value.trim());
  if (missing) { document.getElementById(fields[missing]).focus(); alertMessage.textContent = "请填写已选择渠道的接收信息。"; alertMessage.classList.add("error"); return; }
  const invalid = [...state.channels].find((channel) => !document.getElementById(fields[channel]).checkValidity());
  if (invalid) { document.getElementById(fields[invalid]).focus(); alertMessage.textContent = "请检查接收信息的格式。"; alertMessage.classList.add("error"); return; }
  if (state.channels.has("whatsapp") && !document.getElementById("whatsappOptIn").checked) { alertMessage.textContent = "使用 WhatsApp 前需要确认接收授权。"; alertMessage.classList.add("error"); return; }
  const labels = { email: "Email", telegram: "Telegram", discord: "Discord", whatsapp: "WhatsApp" };
  alertMessage.textContent = `${[...state.channels].map((channel) => labels[channel]).join("、")} · ${document.getElementById("alertFrequency").value}已保存为演示配置；当前不会发送真实消息。`;
});

const dataDialog = document.getElementById("dataDialog");
document.getElementById("aboutButton").addEventListener("click", () => dataDialog.showModal());
document.getElementById("closeDialog").addEventListener("click", () => dataDialog.close());
dataDialog.addEventListener("click", (event) => { if (event.target === dataDialog) dataDialog.close(); });
render();
