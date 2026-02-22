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
          500: '#00cccc',
          600: '#00b3b3',
          700: '#009999',
          800: '#008080',
          900: '#006666',
        },
        dark: {
          DEFAULT: '#0f0f0f',
          lighter: '#1a1a1a',
          card: '#141414',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'bounce-subtle': 'bounce-subtle 2s infinite',
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
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'electric': '0 0 20px rgba(0, 204, 204, 0.3)',
        'electric-lg': '0 0 40px rgba(0, 204, 204, 0.5)',
        'electric-xl': '0 0 60px rgba(0, 204, 204, 0.6)',
        'glow': '0 0 15px rgba(0, 204, 204, 0.4), 0 0 30px rgba(0, 204, 204, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
