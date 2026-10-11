import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Primary
        brand: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Saree Theme - Magenta/Gold
        saree: {
          primary: '#C026D3',
          secondary: '#F59E0B',
          accent: '#EC4899',
          light: '#FDF4FF',
          dark: '#4A044E',
        },
        // Cocopeat Theme - Green/Earth
        cocopeat: {
          primary: '#16A34A',
          secondary: '#92400E',
          accent: '#65A30D',
          light: '#F0FDF4',
          dark: '#14532D',
        },
        // Gold accent
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'saree-gradient': 'linear-gradient(135deg, #C026D3 0%, #EC4899 50%, #F59E0B 100%)',
        'cocopeat-gradient': 'linear-gradient(135deg, #16A34A 0%, #65A30D 50%, #92400E 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(74,4,78,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(192,38,211,0.2) 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
        'mesh-light': 'radial-gradient(at 0% 0%, rgba(217, 70, 239, 0.6) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(245, 158, 11, 0.5) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(22, 163, 74, 0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.5) 0px, transparent 50%), linear-gradient(135deg, #fdf4ff 0%, #f0fdf4 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'product': '0 20px 40px -10px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.05)',
        'product-hover': '0 30px 60px -15px rgba(0,0,0,0.25), 0 20px 25px -5px rgba(0,0,0,0.1)',
        'saree': '0 20px 50px -10px rgba(192,38,211,0.5), 0 10px 20px -5px rgba(192,38,211,0.3)',
        'cocopeat': '0 20px 50px -10px rgba(22,163,74,0.5), 0 10px 20px -5px rgba(22,163,74,0.3)',
        'glow': '0 0 30px rgba(236, 72, 153, 0.6)',
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0px 15px 0px rgba(0,0,0,0.1)',
        'inner-light': 'inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(192,38,211,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(192,38,211,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
