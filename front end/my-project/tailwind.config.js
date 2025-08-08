// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust as needed
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradientX 6s ease infinite",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "400": "400% 400%",
      },
    },
  },
  plugins: [],
};
