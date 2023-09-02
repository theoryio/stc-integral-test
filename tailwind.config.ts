import type { Config } from 'tailwindcss'
const colors = require("tailwindcss/colors");

//clean up legacy colors from tailwind colors
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animatedSettings: {
      animatedSpeed: 200,
      animationDelaySpeed: 0,
    },
    extend: {
      keyframes: {
        'shine-keyframes': {
          '0%': { backgroundPositionX: "200%", },
          '100%': { backgroundPositionX: "-200%", },
        },
      },
      animation: {
        'shine': '4s shine-keyframes linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'skeleton-gradient':
          'linear-gradient(110deg, rgba(100, 100, 100, 0.2) 8%, rgba(100, 100, 100, 0.4) 18%, rgba(100, 100, 100, 0.2) 33%)',
      },
      fontFamily: {
        'title': ['stc-font', 'system-ui'],
        'body': ['stc-font', 'system-ui']
      }
    },
    colors: {
      ...colors,
      'background': "rgb(29, 37, 45)",
      'primary': "rgb(195, 67, 9)",
      "stc-color": "rgb(79, 0, 140)"
    },
  },
  plugins: [
    require('tailwindcss-animatecss')
  ],
}
export default config
