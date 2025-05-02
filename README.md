# Resume App

A Vite + React + TailwindCSS project to render your resume from `resume.json` in a responsive, modern layout.

## Quickstart

> **You need [Node.js](https://nodejs.org/) v18+ installed.**

### 1. Install dependencies

```sh runme
npm install
```

### 2. Place your `resume.json`

Copy your `resume.json` into the `public/` folder:

```sh runme
cp ../data/resume.json public/
```

### 3. Start the development server

```sh runme
npm run dev
```

Open the URL shown in your terminal (usually http://localhost:5173).

---

## Build for Production

```sh runme
npm run build
```

Preview the production build:

```sh runme
npm run preview
```

---

## Project Structure

- `public/resume.json` — Your resume data (JSON)
- `src/components/` — Each resume section as a React component
- `src/App.jsx` — Main layout and data loading
- `src/index.css` — TailwindCSS styles

---

## Customization

- Edit the components in `src/components/` to change layout or add features.
- Tweak Tailwind classes for your preferred look and feel.

---

## License

MIT