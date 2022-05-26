module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      primary: "#0d022c",
      secondary: "#f98821",
      navbg: "#1b0c57",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('./assets/hero.jpg')",
        "nextpage-bg": "url('./assets/nextpage.jpg')",
        "contestHero-bg": "url('./assets/newcontest.jpg')",
      },
    },
  },
  plugins: [],
};
