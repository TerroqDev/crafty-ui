/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
        sans: ['Inter var', 'Arial'],
    },
    extend: {
            colors: {
                primary: "#dbc53e",
                secondary: "#d1a214",
                accent: "#ec7658",
                nprimary: "#ee5029",
                nsecondary: "#dfcd3b",
                background: "#F8EEE1",
                nbackground: "#FBB04C"
            }
        },
  },
  plugins: [],
}

