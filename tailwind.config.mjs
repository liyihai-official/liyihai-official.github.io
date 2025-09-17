/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        // 你想要的“优雅阴影”
        elegant: '0 10px 30px rgba(0,0,0,.06), 0 2px 8px rgba(0,0,0,.08)',
        'elegant-dark': '0 0 0 1px rgba(255,255,255,.10), 0 8px 24px rgba(0,0,0,.45)',
      },
    },
  },
  plugins: [],
};