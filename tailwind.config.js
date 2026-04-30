/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'from-blue-500', 'to-cyan-500',
    'from-green-500', 'to-emerald-500',
    'from-purple-500', 'to-pink-500',
    'from-orange-500', 'to-red-500', 'to-amber-500',
    'from-indigo-500', 'to-blue-500',
    'from-yellow-500', 'to-orange-500',
    'bg-blue-100', 'text-blue-700', 'hover:bg-blue-200',
    'bg-green-100', 'text-green-700', 'hover:bg-green-200',
    'bg-purple-100', 'text-purple-700', 'hover:bg-purple-200',
    'bg-orange-100', 'text-orange-700', 'hover:bg-orange-200',
    'bg-indigo-100', 'text-indigo-700', 'hover:bg-indigo-200',
    'bg-yellow-100', 'text-yellow-700', 'hover:bg-yellow-200',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
