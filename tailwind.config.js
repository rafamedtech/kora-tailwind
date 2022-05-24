module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6c02',
        secondary: '#1e266d',
      },
      borderRadius: {
        custom: '32px',
      },
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
    },
  },
  plugins: [],
};
