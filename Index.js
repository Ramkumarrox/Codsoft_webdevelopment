// 🌟 Job Data
const jobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    description: "Build interactive UI with React.js and Tailwind CSS.",
    type: "Developer",
    category: "developer",
  },
  {
    title: "UI/UX Designer",
    company: "CreativeWorks",
    description: "Design wireframes, prototypes, and user experiences.",
    type: "Design",
    category: "design",
  },
  {
    title: "Data Analyst",
    company: "DataVision",
    description: "Analyze data trends using Python, Excel, and Power BI.",
    type: "Data",
    category: "data",
  },
  {
    title: "Backend Engineer",
    company: "CodeLabs",
    description: "Develop robust APIs using Node.js and Express.",
    type: "Developer",
    category: "developer",
  },
  {
    title: "Digital Marketing Executive",
    company: "AdGenius",
    description: "Manage SEO and social media campaigns effectively.",
    type: "Marketing",
    category: "marketing",
  },
  
  { title: "Senior Frontend Developer", company: "WebCorp", category: "developer" },
  { title: "Lead Backend Engineer", company: "DataSync", category: "developer" },
  { title: "Full Stack JavaScript Developer", company: "InnovateTech", category: "developer" },
  { title: "DevOps Engineer", company: "CloudFlow", category: "engineer" },
  { title: "Machine Learning Scientist", company: "AI Solutions", category: "data" },
  { title: "Data Analyst", company: "MetricMinds", category: "data" },
  { title: "Data Scientist", company: "Predictive Inc.", category: "data" },
  { title: "UX/UI Designer", company: "CreativeEdge", category: "design" },
  { title: "Product Manager", company: "Visionary Ltd.", category: "product" },
  { title: "Technical Product Manager", company: "TechPros", category: "product" },
  { title: "Digital Marketing Specialist", company: "MarketGrow", category: "marketing" },
  { title: "SEO Strategist", company: "RankUp Agency", category: "marketing" },
  { title: "Social Media Manager", company: "BuzzMedia", category: "marketing" },
  { title: "Content Writer", company: "WordSmiths", category: "content" },
  { title: "Copywriter", company: "AdGenius", category: "content" },
  { title: "Technical Writer", company: "Documentation Hub", category: "content" },
  { title: "Network Administrator", company: "NetGuard", category: "it" },
  { title: "Cybersecurity Analyst", company: "SecureFuture", category: "it" },
  { title: "IT Support Technician", company: "HelpDesk Pros", category: "it" },
  { title: "Financial Analyst", company: "Global Finance", category: "finance" },
  { title: "Staff Accountant", company: "AuditSolutions", category: "finance" },
  { title: "Controller", company: "FinPlan Group", category: "finance" },
  { title: "Human Resources Manager", company: "PeopleFirst", category: "hr" },
  { title: "Talent Acquisition Specialist", company: "RecruitFast", category: "hr" },
  { title: "Customer Service Representative", company: "ClientConnect", category: "support" },
  { title: "Operations Manager", company: "Efficiency Works", category: "operations" },
  { title: "Supply Chain Analyst", company: "Logistics Pro", category: "operations" },
  { title: "Executive Assistant", company: "CornerOffice", category: "admin" },
  { title: "Office Administrator", company: "HQ Services", category: "admin" },
  { title: "Sales Development Representative (SDR)", company: "TargetSales", category: "sales" },
  { title: "Account Executive", company: "ClientGrowth", category: "sales" },
  { title: "VP of Sales", company: "RevenueDrive", category: "sales" },
  { title: "Research Scientist", company: "Future Labs", category: "science" },
  { title: "Biostatistician", company: "HealthData Inc.", category: "science" },
  { title: "Project Manager (Construction)", company: "BuildRight", category: "management" },
  { title: "Agile Scrum Master", company: "TeamVelocity", category: "management" },
  { title: "Quality Assurance (QA) Tester", company: "BugFinders", category: "testing" },
  { title: "Mobile App Developer (iOS)", company: "AppGen", category: "developer" },
  { title: "Cloud Architect", company: "Azure/AWS/GCP", category: "engineer" },
  { title: "Technical Support Engineer", company: "Resolution Team", category: "engineer" },
  { title: "Business Analyst", company: "Process Streamline", category: "business" },
  { title: "E-commerce Manager", company: "ShopOnline", category: "marketing" },
  { title: "Public Relations Specialist", company: "PR Impact", category: "marketing" },
  { title: "Investment Banking Associate", company: "Wall Street Group", category: "finance" },
  { title: "School Teacher (High School Math)", company: "EduPath", category: "education" },
  { title: "Librarian", company: "City Library", category: "admin" },
  { title: "Mechanical Engineer", company: "AutoDesign", category: "engineer" },
  { title: "Petroleum Geologist", company: "OilRig Corp.", category: "science" },
  { title: "Game Developer", company: "PixelPlay Games", category: "developer" },
  { title: "Chief Technology Officer (CTO)", company: "TechLead Ventures", category: "executive" }
];

// 🧠 Render Jobs
const jobList = document.getElementById("jobList");

function renderJobs(filteredJobs) {
  jobList.innerHTML = "";
  filteredJobs.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong></p>
      <p>${job.description}</p>
      <span class="job-type">${job.type}</span><br/>
      <button class="apply-btn">Apply Now</button>
    `;
    jobList.appendChild(card);
  });

  document.querySelectorAll(".apply-btn").forEach((btn) =>
    btn.addEventListener("click", openModal)
  );
}

// 🔍 Search Function
document.getElementById("searchBox").addEventListener("input", (e) => {
  const filter = e.target.value.toLowerCase();
  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filter) ||
      job.company.toLowerCase().includes(filter) ||
      job.description.toLowerCase().includes(filter)
  );
  renderJobs(filtered);
});

// 🧭 Category Filter
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    if (category === "all") renderJobs(jobs);
    else renderJobs(jobs.filter((job) => job.category === category));
  });
});

// 💌 Apply Modal
const modal = document.getElementById("applyModal");
const closeBtn = document.querySelector(".close-btn");

function openModal() {
  modal.style.display = "flex";
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

document.getElementById("submitApplication").onclick = () => {
  alert("✅ Application submitted successfully!");
  modal.style.display = "none";
};

// 🚀 Initial Render
renderJobs(jobs);