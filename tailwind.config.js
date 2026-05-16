/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        faint: 'var(--faint)',
        brandBlue: 'var(--brand-blue)',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        dm: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'massive': 'clamp(50px, 16vw, 250px)',
        'manifesto': 'clamp(40px, 12vw, 160px)',
        'massive-footer': '30vw',
        'srv-item': 'clamp(30px, 8vw, 100px)',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'wider': '0.1em',
      },
      lineHeight: {
        'tightest': '0.85',
      }
    },
  },
  plugins: [],
}
