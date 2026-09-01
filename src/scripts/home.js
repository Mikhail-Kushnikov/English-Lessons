import students from "../data/students.json";

const grid = document.querySelector("#student-grid");

if (grid) {
  const published = students.filter((student) => student.published);

  grid.innerHTML = published
    .map(
      (student) => `
    <a class="lesson-card" href="./students/${student.slug}/">
      <div class="lesson-card__meta">
        <span class="badge">Student</span>
      </div>
      <h2 class="lesson-card__title">${student.name}</h2>
      <p class="lesson-card__topics">Personal lesson library</p>
    </a>
  `,
    )
    .join("");
}
