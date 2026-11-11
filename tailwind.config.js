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
        void: '#030712',
        surface: {
          dark: '#070a16',
          card: 'rgba(13, 18, 38, 0.65)',
          hover: 'rgba(23, 31, 62, 0.75)'
        },
        accent: {
          cyan: '#00f2fe',
          violet: '#7928ca',
          purple: '#9d4edd',
          emerald: '#10b981',
          blue: '#4facfe'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(157, 78, 221, 0.35)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #9d4edd 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
}
