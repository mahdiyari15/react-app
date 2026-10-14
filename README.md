# 🎞️ Movie List — React

A small **React** app for managing a personal movie list: add movies (title, director, year, genre), view them and remove them. State is managed with the **Context API** and a **reducer**.

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black">
</p>

## Run

```bash
npm install
npm start      # http://localhost:3000
```

## Structure

- `src/contexts/MovieContext.js` — global movie state
- `src/reducers/movieReducer.js` — add / remove actions
- `src/components/` — `Navbar`, `MovieForm`, `MovieList`, `MovieDetails`
