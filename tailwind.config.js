module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", 
          "./components/**/*.{js,ts,jsx,tsx}",
          "./UIkit/**/*.{js,ts,jsx,tsx}",
          "./Forms/**/*.{js,ts,jsx,tsx}"
        ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
