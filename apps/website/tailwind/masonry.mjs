import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
  addUtilities({
    ".masonry": {
      columnGap: "0.5rem",
      columnCount: "1",
      '@media (min-width: 640px)': {
        columnCount: "2",
      },
      '@media (min-width: 768px)': {
        columnCount: "3",
      },
      '@media (min-width: 1024px)': {
        columnCount: "4",
      }
    },
    ".break-inside": {
      breakInside: "avoid",
    },
  });
});
