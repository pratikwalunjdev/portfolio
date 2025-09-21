// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        'spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        // Orbits
        'orbit-1': 'spin 20s linear infinite',
        'orbit-2': 'spin 25s linear infinite',
        'orbit-3': 'spin 18s linear infinite',
        'orbit-4': 'spin 30s linear infinite',
        'orbit-5': 'spin 15s linear infinite',
        // Counter-rotations for planets to stay upright
        'reverse-orbit-1': 'spin-reverse 20s linear infinite',
        'reverse-orbit-2': 'spin-reverse 25s linear infinite',
        'reverse-orbit-3': 'spin-reverse 18s linear infinite',
        'reverse-orbit-4': 'spin-reverse 30s linear infinite',
        'reverse-orbit-5': 'spin-reverse 15s linear infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
