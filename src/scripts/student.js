import lessons from "../data/lessons.json";
import students from "../data/students.json";

const grid = document.querySelector("#lesson-grid");
const studentSlug = document.body.dataset.student;

if (grid && studentSlug) {
  const student = students.find((item) => item.slug === studentSlug);
  const published = lessons.filter(
    (lesson) => lesson.published && lesson.studentId === student?.id,
  );

  grid.innerHTML = published.length
    ? published
        .map(
          (lesson) => `
    <a class="lesson-card" href="../../lessons/${lesson.slug}/">
      <div class="lesson-card__meta">
        <span class="badge">${lesson.level}</span>
        <span>${lesson.duration} min</span>
        <span>${lesson.format}</span>
      </div>
      <h2 class="lesson-card__title">${lesson.title}</h2>
      <p class="lesson-card__topics">${lesson.subtitle}</p>
    </a>
  `,
        )
        .join("")
    : `<p class="lesson-card__topics">No lessons yet for ${student?.name ?? "this student"}.</p>`;
}
