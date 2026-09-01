import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync, statSync, existsSync, readFileSync } from "node:fs";

function injectSeasonScript() {
  const seasonJs = readFileSync(resolve(__dirname, "src/scripts/season.js"), "utf8");

  return {
    name: "inject-season-script",
    transformIndexHtml(html) {
      if (html.includes("dataset.season")) return html;
      return html.replace("<head>", `<head>\n    <script>${seasonJs}</script>`);
    },
  };
}

function discoverLessonEntries(rootDir) {
  const lessonsDir = resolve(rootDir, "lessons");
  const entries = {};

  if (!existsSync(lessonsDir)) return entries;

  for (const slug of readdirSync(lessonsDir)) {
    const lessonHtml = resolve(lessonsDir, slug, "index.html");
    if (statSync(resolve(lessonsDir, slug)).isDirectory() && existsSync(lessonHtml)) {
      entries[`lessons/${slug}/index`] = lessonHtml;
    }
  }

  return entries;
}

function discoverStudentEntries(rootDir) {
  const studentsDir = resolve(rootDir, "students");
  const entries = {};

  if (!existsSync(studentsDir)) return entries;

  for (const slug of readdirSync(studentsDir)) {
    const studentHtml = resolve(studentsDir, slug, "index.html");
    if (statSync(resolve(studentsDir, slug)).isDirectory() && existsSync(studentHtml)) {
      entries[`students/${slug}/index`] = studentHtml;
    }
  }

  return entries;
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "./" : "/",
  plugins: [injectSeasonScript()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...discoverStudentEntries(__dirname),
        ...discoverLessonEntries(__dirname),
      },
    },
  },
}));
