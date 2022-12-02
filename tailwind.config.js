/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge 배열을 변경해 줍니다.
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['pretendard', 'sans-serif'],
        },
        fontSize: {
          xl: "32px",
          lg: "20px",
          md: "16px",
          sm: "12px",
        },
        fontWeight: {
          bl: "700",
          md: "500",
          rg: "400"
        },
        color: {
          co1: "#F6F0EE",
          co2: "#ED9071",
          rd: '#FD6E7F',
          gr1: "#4DB173",
          gr2: '#009422',
          mo1: '#D8D8D8',
          mo2: '#AFAFAF',
          mo3: '#838383',
          mo4: '#545454',
          mo5: '#303030'
        },
        backgroundColor: {
          sub: '#F6F0EE',
          main: '#ED9071',
        },
        width: {
          // Tab, Chat, Pet, Modal, Nickname, Login, Signup, Write, Search
          t1: '180.05px',
          c1: '548.48px',
          c2: '626.02px',
          p1: '272px',
          p2: '273.45px',
          p3: '319.02px',
          p4: '628.79px',
          m1: '220px',
          m2: '540px',
          m3: '399.11px',
          m4: '440.77px',
          m5: '422px',
          n1: '240.42px',
          l1: '560px',
          s1: '559.82px',
          w1: '362px',
          w2: '580px',
          se1: '626.02px'
        },
        maxWidth: {
          '1/2': '360px',
          '1': '720px',
        },
        height: {
          // Tab, Chat, Pet, Modal, Nickname, Login, Signup, Write, Search
          t1: '52px',
          c1: '60px',
          c2: '66.17px',
          p1: '43.69px',
          p2: '64px',
          p4: '67.36px',
          m1: '64px',
          m2: '380px',
          m3: '215.41px',
          m4: '233.74px',
          m5: '336px',
          n1: '64px',
          l1: '80px',
          s1: '80px',
          w1: '67.55px',
          w2: '90px',
          w3: '109.97px',
          w4: '296.26px',
          se1: '60px',
        },
        maxHeight: {
          '1/2': '640px',
          '1': '1280px',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
