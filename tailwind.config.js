// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/js/**/*.js"
  ],
  safelist: [
    'hidden',
    // nếu bạn dùng các class động khác (ví dụ: 'block', 'inline-block', 'flex', 'grid', 'z-[9999]'...) hãy thêm ở đây
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        slate: colors.slate,
        zinc: colors.zinc,
        neutral: colors.neutral,
      },
    },
  },
  plugins: [],
};
