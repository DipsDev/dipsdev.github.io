/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brighter: "#795757",
        bright: "#664343",
        dark: "#3D3D3D",
        "dark-bright": "#595959",
      },
    },
  },
  plugins: [],
};
