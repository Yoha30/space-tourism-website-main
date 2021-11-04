module.exports = {
  mode:'jit',
  purge: [
      'index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('assets/home/background-home-desktop.jpg')",
        "home-sm":"url('assets/home/background-home-mobile.jpg')",
      },
      textColor:{
        'baby-blue':'#D0D6F9',
      },
      ringWidth:{
        '10':'5rem',
      },
      letterSpacing:{
        'large':'0.3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
