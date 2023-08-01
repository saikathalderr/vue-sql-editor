## Project Setup

```sh
npm install
npm run dev
```


## Project Overview
On this app, there are few data sets already available, you can choose -> type or select some pre-defined queries & run to get the results out in the bottom.

https://github.com/saikathalderr/vue-sql-editor/assets/29329128/332c01d5-a798-4bcb-8c50-8c4b449531b3

## Tech

- I have used Vue3 with Vite
- `papaparse` for parsing CSV files
- `pinia` for state management
- `daisyui` & `tailwindcss` for the UI ✨ (you should try the dark mode 🌚 - 💡 sync with system theme)

## Performance
Used chrome's lighthouse & performance insights to measure

it takes around 10ms to load the app, and a whole user journy from a small size query data rendering to the large data (around 1k entry) rendering takes around 728ms to complete.

The lighthouse performance score is 93+ (🟢 green)
