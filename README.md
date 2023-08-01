## Project Setup

```sh
npm install
npm run dev
```


## Project Overview
On this app, there are few data sets already available, you can choose -> type or select some pre-defined queries & run to get the results out in the bottom.


https://github.com/saikathalderr/vue-sql-editor/assets/29329128/5fb34408-d0e3-419e-b0e2-048b2743d556



## Tech

- I have used Vue3 with Vite
- `papaparse` for parsing CSV files
- `pinia` for state management
- `daisyui` & `tailwindcss` for the UI ✨ (you should try the dark mode 🌚 - 💡 sync with system theme)

## Performance
Used chrome's lighthouse & performance insights to measure

it takes around 10ms to load the app, and a whole user journy from a small size query data rendering to the large data (around 1k entry) rendering takes around 728ms to complete.

The lighthouse performance score is 93+ (🟢 green)
