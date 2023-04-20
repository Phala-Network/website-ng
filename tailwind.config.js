const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      colors: {
        phat: {
          DEFAULT: '#59A138',
          50: '#F5FFF0',
          100: '#D5F6C6',
          200: '#B2E69A',
          300: '#8AD368',
          400: '#6FB74E',
          500: '#59A138',
          600: '#438525',
          700: '#3B6727',
          800: '#325422',
          900: '#29451C',
        },
        // alias to phat
        brand: {
          DEFAULT: '#59A138',
          50: '#F5FFF0',
          100: '#D5F6C6',
          200: '#B2E69A',
          300: '#8AD368',
          400: '#6FB74E',
          500: '#59A138',
          600: '#438525',
          700: '#3B6727',
          800: '#325422',
          900: '#29451C',
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
      },
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
