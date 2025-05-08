/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        lt:{
            1 :'#121212',
            2 : '#777777',
            3 : '#ECECEC',
            4 : '#D7D7D7',
            5 : '#E0B519',
          
        },
        dark:{
          1 :'#C3C3C3',
          2 : '#797979',
          3 : '#0E0E0E',
          4 : '#1A1A1A',
          5 : '#080808',
        },

        n:{
          1:'#F5C518',
          2:'#B29630',
          3:'#D8C882',
          4:'#42BDDA',
        },

        t:{
          10: 'A3A3A3/10',
          5 : 'A3A3A3/5',
          60: 'A3A3A3/60',
        }


      },

      fontFamily:{
        sans : ['var(--font-roboto) ' ,...fontFamily.sans],
      },

      z:{
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },


    },
  },
  plugins: [
    plugin(function({ addBase, addComponents, addUtilities }){
      addBase({});
      addComponents({
        ".h1":{
          "@apply text-[2.25rem] font-normal leading-[auto]":{}
        },
        ".h2":{
          "@apply text-[1.75rem] font-normal leading-[auto]":{}
        },
        ".h3":{
          "@apply text-[1.25rem] font-normal leading-[auto]":{}
        },
        ".h4":{
          "@apply text-[1.125rem] font-normal leading-[auto]":{}
        },
        ".h4-bold":{
          "@apply text-[1.125rem] font-bold leading-[auto]":{}
        },
        ".p1":{
          "@apply text-[1rem] font-normal leading-[1.75rem]":{}
        },
      });
      addUtilities({});
    })
  ],
}

