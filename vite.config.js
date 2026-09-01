import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync, statSync, existsSync } from "node:fs";

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

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "./" : "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...discoverLessonEntries(__dirname),
      },
    },
  },
}));
