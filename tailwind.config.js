/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      textColor: {
        notesTextColor: "rgba(53, 53, 53)",
        defaultPageTextColor: "#292929",
      },

      backgroundColor: {
        darkBlue: "#16008B",
        lightBlue: "#001F8B",
        notesBackgroundColor: "#DAE5F5",
        groupItem: "rgba(47, 47, 47, 0.17)",
      },
      boxShadow: {
        notesItem: "0 4px 20px 0 rgba(0, 0, 0, 0.25)",
      },
      gridTemplateColumns: {
        customColumns: "1fr 2.5fr",
        fullWidthColumns: "100vw 100vw",
      },
      gridTemplateRows: {
        customRows: "1fr 7fr 2fr",
      },
    },
  },
  plugins: [],
};
