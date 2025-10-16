# Fruit Search App (React + Vite)

A small React + Vite demo that provides a searchable list of fruit names using a remote suggestions API.

This project contains a focused component at `src/App.jsx` (`FruitsSearch`) that demonstrates:

- A controlled search input with a 700ms debounce implemented via `useEffect` + `setTimeout`.
- Fetching suggestions from the public API: `https://fruit-search.freecodecamp.rocks/api/fruits?q=<query>`.
- Displaying results as a list of fruit names or a "No results found" message.
- Basic error handling that logs fetch errors to the console.

Files of interest

- `src/App.jsx` — Implements the `FruitsSearch` component and mounts it in the default `App` export.

How it works (quick)

- The search input updates a local `query` state.
- If `query` is empty the results are cleared.
- When `query` is non-empty a 700ms timer runs; after the delay the app calls the remote API and maps the returned objects to their `name` values.
- Results are rendered below the input as paragraphs with class `result-item`.

Run locally

1. cd into the project folder:

```bash
cd react-mini-projects/fruit-search-app
```

2. Install and start the dev server:

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) and type into the search box. The form submission is prevented, so pressing Enter won't reload the page.

Notes & suggestions

- The component uses a simple time-based debounce. If you prefer a reusable hook you can extract the logic into `useDebounce`.
- Errors during fetch are only logged to the console — consider adding UI feedback for network errors.

License / template
