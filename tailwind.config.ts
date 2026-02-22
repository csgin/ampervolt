import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#e6ffff',
          100: '#b3f5f5',
          200: '#80ebeb',
          300: '#4de0e0',
          400: '#1ad6d6',
          500: '#00cccc', // Main turquoise
          600: '#00b3b3',
          700: '#009999',
          800: '#008080',
          900: '#006666',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 204, 204, 0.5)',
            opacity: '1' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 204, 204, 0.8)',
            opacity: '0.9' 
          },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.95' },
        },
      },
      boxShadow: {
        'electric': '0 0 20px rgba(0, 204, 204, 0.3)',
        'electric-lg': '0 0 40px rgba(0, 204, 204, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
