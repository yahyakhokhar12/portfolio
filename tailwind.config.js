import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0b0b0b',
          850: '#111111',
          800: '#181818'
        },
        gold: {
          300: '#FDE68A',
          400: '#FACC15',
          500: '#FFD43B'
        }
      },
      boxShadow: {
        glow: '0 0 60px rgba(255, 212, 59, 0.12)'
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top, rgba(255,212,59,0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(255,212,59,0.08), transparent 30%)'
      }
    }
  },
  plugins: [forms]
};
