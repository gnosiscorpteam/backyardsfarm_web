/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs':'420px',
      'ssm' : '520px',
      'xsm' : "620px",
      'sm': '760px',
      // => @media (min-width: 640px) { ... }

      'md': '820px',
      // => @media (min-width: 768px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: `12px;`,
      sm: `14px;`,
      base: `16px;`,
      md: `18px;`,
      lg: `20px;`,
      xl: `24px;`,
      xxl: `36px;`,
      xxxl: `50px;`
    },
    extend: {
      colors: {
        primary: {
          50: '#EAF1E9',
          100: '#C5D790',
          200: '#70A16A',
          300: '#2A7221',
          400: '#475226',
        },
        secondary : {
          100: "#F5C993",
          200 : "#E98A15",
          300 : "#4F3824"
        }
      }
    },
  },
  plugins: [],
}

