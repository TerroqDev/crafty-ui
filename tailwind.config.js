const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#1585db",
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

