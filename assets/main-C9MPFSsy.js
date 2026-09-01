import{s as l}from"./students-DR01S5TU.js";/* empty css             */const e=document.querySelector("#student-grid");if(e){const a=l.filter(s=>s.published);e.innerHTML=a.map(s=>`
    <a class="lesson-card" href="./students/${s.slug}/">
      <div class="lesson-card__meta">
        <span class="badge">Student</span>
      </div>
      <h2 class="lesson-card__title">${s.name}</h2>
      <p class="lesson-card__topics">Personal lesson library</p>
    </a>
  `).join("")}
