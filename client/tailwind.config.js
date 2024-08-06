// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Kanit", "sans-serif"],
      },
      animation: {
        scale: 'scale 1s infinite',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(0.6)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      backgroundImage: (theme) => ({
        "gradient-to-br": "#F5F7F6",
      }),
    },
  },
  variants: {},
  plugins: [],
};
