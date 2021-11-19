module.exports = {
  mode:'jit',
  purge: [
      'index.html',
      'destination-moon.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('assets/home/background-home-desktop.jpg')",
        "home-sm":"url('assets/home/background-home-mobile.jpg')",
        "home-md":"url('assets/home/background-home-tablet.jpg')",
        'destination':"url('assets/destination/background-destination-desktop.jpg')",
        'destination-sm':"url('assets/destination/background-destination-mobile.jpg')",
        'destination-md':"url('assets/destination/background-destination-tablet.jpg')",
        'crew':"url('assets/crew/background-crew-desktop.jpg')",
        'crew-sm':"url('assets/crew/background-crew-mobile.jpg')",
        'crew-md':"url('assets/crew/background-crew-tablet.jpg')",
      },
      textColor:{
        'baby-blue':'#D0D6F9',
      },
      width:{
        '98':'32rem',
        '75':'19rem',
        '92':'22rem',
        '93':'26rem',
        '81':'21rem',
        '97':'28rem',
        '95':'25.5rem',
        '94':'26rem',
      },
      backgroundColor:{
        'dark-blue':'#141728',
        'gray':'#363841',
      },
      ringWidth:{
        '10':'5rem',
        '9':'3rem',
      },
      letterSpacing:{
        'large':'0.3rem',
      },
      screens:{
        'fold':'285px',
        'ix':'360px',
        'pixel':'390px',
        'plus':'410px',
        'duo':'481px',
        'ipad':'750px',
        'ipro':'991px',
        'sm-dt':'1200px', /*small desktop screen*/
        'wide':'1355px',
        'md-dt':'1400px',
        'lg-dt':'1500px',
        'xl-dt':'1700px',
        'dt':'1800px',
       },
      margin:{
        '85':'22rem',
      },
      padding:{
        '30':'7.5rem',
        '18':'4.5rem',
        '34':'8.5rem',
      },
      height:{
        '98':'33.8rem',
      },
      inset:{
        '26':'6.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
