import lessons from "../data/lessons.json";

const grid = document.querySelector("#lesson-grid");

if (grid) {
  const published = lessons.filter((lesson) => lesson.published);

  grid.innerHTML = published
    .map(
      (lesson) => `
    <a class="lesson-card" href="./lessons/${lesson.slug}/">
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
    .join("");
}
