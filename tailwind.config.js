/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1078px',
      },
    },
    extend: {
      colors: {
        primary: '#7763F1',
        'white-98': '#fafafa',
      },
    },
  },
  plugins: [],
}

