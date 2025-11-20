/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        dusk: '#1c1f2a',
        accent: '#5ef5c6',
        accentMuted: '#b6ffe3'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        card: '0 12px 45px rgba(15, 23, 42, 0.15)'
      }
    }
  }
};
