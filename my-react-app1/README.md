# Footballer Search App (React + Vite)

A small demo that lets you search a static list of footballer names with a debounced input.

This project centers on `src/App.jsx` (`FootballerSearch`) and demonstrates:

- A text input bound to local state used for searching.
- A simple `useDebounce` hook located in `src/hooks/useDebounce` that delays search processing until the user stops typing (1 second in this app).
- Filtering a local `footballers` array for substring matches (case-insensitive).
- Logging results to the console — the component currently shows only the input and title in the UI.

Files of interest

- `src/App.jsx` — The `FootballerSearch` component and default export.
- `src/hooks/useDebounce.jsx` — Debounce hook used by the component.
- `src/footballers` — The local array of footballer names used for matching.

How it works (quick)

- The input updates `query` immediately.
- `useDebounce` returns a debounced version of `query` (`debouncedQuery`) that updates 1000ms after typing stops.
- When `debouncedQuery` changes the effect filters `footballers` and logs the matches to the console.

Run locally

1. cd into the project folder:

```bash
cd react-mini-projects/my-react-app1
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the dev server URL shown by Vite (usually http://localhost:5173). Open the browser console to see search results printed as you type.

Suggestions

- Update the component to render the filtered results in the UI instead of logging to the console.
- Parametrize the debounce delay or expose it as a prop for faster/slower behavior.

License / template

- This repository was bootstrapped from a Vite React template; feel free to expand or replace the template docs.