/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tokens de tema (cambian con .light)
        ink: 'rgb(var(--ink) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        bone: 'rgb(var(--bone) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        acid: {
          DEFAULT: 'rgb(var(--acid) / <alpha-value>)',
          soft: 'var(--acid-soft)',
          deep: 'var(--acid-deep)',
        },
        // Valores con alfa ya incluida
        line: 'var(--line)',
        elev: 'var(--elev)',
        overlay: 'var(--overlay)',
        // Texto que siempre va sobre relleno lima
        onacid: '#0B0B0B',
        // alias legado
        night: 'rgb(var(--ink) / <alpha-value>)',
        panel: 'rgb(var(--surface) / <alpha-value>)',
        neon: 'rgb(var(--acid) / <alpha-value>)',
        aqua: 'rgb(var(--accent) / <alpha-value>)',
        brand: {
          violet: 'rgb(var(--acid) / <alpha-value>)',
          fuchsia: 'rgb(var(--accent) / <alpha-value>)',
          cyan: 'rgb(var(--accent) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 40px -22px rgba(203, 255, 62, 0.4)',
        'glow-cyan': '0 18px 40px -22px rgba(203, 255, 62, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
