/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
        },
        emerald: {
          600: '#059669',
          500: '#10b981',
        },
        amber: {
          600: '#d97706',
        },
        rose: {
          600: '#e11d48',
        },
      },
    },
  },
  plugins: [],
}
