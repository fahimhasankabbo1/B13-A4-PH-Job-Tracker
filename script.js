const jobs = [
  { id:1, company:"Mobile First Corp",
     position:"React Native Developer", 
     location:"Remote", 
     type:"Full-time", 
     salary:"$130,000 - $175,000", 
     description:"Build cross-platform mobile apps using React Native.", 
     status:"all" },

  { id:2, company:"WebFlow Agency", 
    position:"Web Designer & Developer", 
    location:"Los Angeles, CA", 
    type:"Part-time", 
    salary:"$80,000 - $120,000", 
    description:"Design and develop modern responsive websites.",
    status:"all" },

  { id:3, company:"DataViz Solutions", 
    position:"Data Visualization Specialist", 
    location:"Boston, MA", 
    type:"Full-time", 
    salary:"$125,000 - $165,000", 
    description:"Transform complex data into interactive visualizations.", 
    status:"all" },

  { id:4, company:"CloudFirst Inc", 
    position:"Backend Developer", 
    location:"Seattle, WA", 
    type:"Full-time", 
    salary:"$140,000 - $190,000", 
    description:"Build scalable backend systems.", 
    status:"all" },

  { id:5, company:"Innovation Labs", 
    position:"UI/UX Engineer", 
    location:"Austin, TX", 
    type:"Full-time", 
    salary:"$110,000 - $150,000", 
    description:"Create user-friendly interfaces.", 
    status:"all" },

  { id:6, company:"MegaCorp Solutions", 
    position:"JavaScript Developer", 
    location:"New York, NY", 
    type:"Full-time", 
    salary:"$130,000 - $170,000",
     description:"Develop enterprise-level JS apps.", 
     status:"all" },

  { id:7, company:"StartupXYZ", 
    position:"Full Stack Engineer", 
    location:"Remote", 
    type:"Full-time", 
    salary:"$120,000 - $160,000",
    description:"Work on a fast-growing startup platform.", 
    status:"all" },

  { id:8, company:"TechCorp Industries", 
    position:"Senior Frontend Developer", 
    location:"San Francisco, CA", 
    type:"Full-time", 
    salary:"$130,000 - $175,000", 
    description:"Build scalable frontend apps.", 
    status:"all" }
];

const container = document.getElementById("jobsContainer");
let currentTab = "all";
let selectedCount = 0;

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;

  if (selectedCount === 0) {
    document.getElementById("jobCounter").innerText = `${jobs.length} Jobs`;
  } else {
    document.getElementById("jobCounter").innerText = `${selectedCount} of ${jobs.length} Jobs`;
  }
}

function renderJobs() {
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <img src="jobs.png" alt="empty">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {
    container.innerHTML += `
      <div class="job-card 
      ${job.status}">
        <span class="delete-btn" data-id="
        ${job.id}">🗑</span>

        <h3>${job.company}</h3>
        <p>${job.position}</p>
        <p>${job.location} • 
        ${job.type} • 
        ${job.salary}</p>

        <div class="status 
        ${job.status}">
          ${job.status === "all" ? "NOT APPLIED" : 
            job.status.toUpperCase()}
        </div>

        <p>${job.description}</p>

        <div class="job-actions">
          <button class="interview-btn 
          ${job.status==="interview"?"active":""}" data-id="
          ${job.id}">Interview</button>
          <button class="rejected-btn 
          ${job.status==="rejected"?"active":""}" data-id="
          ${job.id}">Rejected</button>
        </div>
      </div>
    `;
  });
}

document.addEventListener("click", function (e) {
  const id = Number(e.target.dataset.id);
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  if (e.target.classList.contains("interview-btn")) {
  if (job.status === "interview") {
    job.status = "all";
    selectedCount--;
  } 
  else {
    if (job.status === "all") selectedCount++;
    job.status = "interview";
  }
}

if (e.target.classList.contains("rejected-btn")) {

  if (job.status === "rejected") {
    job.status = "all";
    selectedCount--;
  } 
  else {
    if (job.status === "all") selectedCount++;
    job.status = "rejected";
  }
}

  if (e.target.classList.contains("delete-btn")) {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
      if(jobs[index].status !== "all") selectedCount--;
      jobs.splice(index, 1);
    }
  }

  updateDashboard();
  renderJobs();
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function () {
    document.querySelector(".tab.active").classList.remove("active");
    this.classList.add("active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

updateDashboard();
renderJobs();