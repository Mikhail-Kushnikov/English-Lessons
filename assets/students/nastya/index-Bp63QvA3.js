import{s as l}from"../../students-DR01S5TU.js";/* empty css                 *//* empty css                   */const n=[{slug:"english-in-real-life",studentId:"nastya",title:"English in Real Life",subtitle:"Travel • Digital Detox • Everyday Life",level:"B1–B2",duration:60,format:"Online 1:1",topics:["Travel","Digital Detox","Everyday Life"],skills:["Present tenses","Vocabulary","Speaking"],published:!0},{slug:"workplace-ambition",studentId:"nastya",title:"Workplace Ambition",subtitle:"Fashion Magazine • Office Culture • Career English",level:"B1–B2",duration:60,format:"Online 1:1",topics:["Workplace","Fashion media","Career stories"],skills:["Past & present narrative","Vocabulary","Speaking"],published:!0}],a=document.querySelector("#lesson-grid"),i=document.body.dataset.student;if(a&&i){const s=l.find(e=>e.slug===i),t=n.filter(e=>e.published&&e.studentId===(s==null?void 0:s.id));a.innerHTML=t.length?t.map(e=>`
    <a class="lesson-card" href="../../lessons/${e.slug}/">
      <div class="lesson-card__meta">
        <span class="badge">${e.level}</span>
        <span>${e.duration} min</span>
        <span>${e.format}</span>
      </div>
      <h2 class="lesson-card__title">${e.title}</h2>
      <p class="lesson-card__topics">${e.subtitle}</p>
    </a>
  `).join(""):`<p class="lesson-card__topics">No lessons yet for ${(s==null?void 0:s.name)??"this student"}.</p>`}
