# English Lessons — Web Platform

Адаптивная платформа для онлайн-уроков английского. Каждый урок — отдельная страница. Исходник для печати остаётся в `../default/`.

## Быстрый старт

```bash
cd project
npm install
npm run dev
```

Откройте адрес из терминала (обычно `http://localhost:5173`).

## Сборка и деплой

```bash
npm run build
npm run preview
```

Папка `dist/` содержит статический сайт — загрузите её на любой хостинг:

| Платформа | Настройки |
|-----------|-----------|
| **Netlify** | Build: `npm run build`, Publish: `dist` |
| **Vercel** | Root: `project`, Output: `dist` |
| **GitHub Pages** | Deploy содержимое `dist/` |
| **Cloudflare Pages** | Build: `npm run build`, Output: `dist` |

## Структура

```
project/
├── index.html                 # каталог уроков
├── lessons/
│   └── english-in-real-life/
│       └── index.html         # один урок = одна страница
├── src/
│   ├── data/lessons.json      # метаданные для главной
│   ├── styles/                # общие стили (адаптивные)
│   └── scripts/
└── .cursor/rules/             # правила для AI при создании уроков
```

## Как добавить новый урок

1. Скопируйте `lessons/english-in-real-life/` в `lessons/<новый-slug>/`.
2. Отредактируйте содержимое, сохраняя структуру секций 01–06.
3. Добавьте запись в `src/data/lessons.json`.
4. Запустите `npm run build` — Vite автоматически подхватит новую папку.

## Правила для AI (Cursor)

В `.cursor/rules/` три обязательных набора правил:

- **english-lesson-authoring** — педагогическая структура и дизайн заданий
- **lesson-responsive-layout** — адаптивная вёрстка
- **project-conventions** — структура проекта и деплой

При постановке задач на новые уроки ссылайтесь на эти правила — они будут применяться автоматически при работе с файлами уроков.

## Дальнейшее развитие (интерактив)

Заложено для будущего:

- поля ввода вместо `.blank` / `.answer-line`
- кнопки «показать ответ»
- таймеры для speaking rounds
- сохранение прогресса в `localStorage`

Логику добавляйте в `src/scripts/` как ES-модули; HTML-урок должен оставаться читаемым без JavaScript.

## Связь с default/

Папка `../default/` — версия для печати A3 (Playwright → PNG). Веб-уроки живут в `project/` и используют ту же педагогическую структуру, но с fluid-layout вместо фиксированного холста.
