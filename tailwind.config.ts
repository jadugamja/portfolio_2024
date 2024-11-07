import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          fore: '#fff',
          back: '#232323'
        },
        neutral: {
          5: '#e7e7e7'
        }
      }
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      'dela-gothic-one': ['Dela Gothic One', 'sans-serif'],
      'jacques-francois': ['Jacques Francois', 'sans-serif'],
      'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      'gowun-dodam': ['Gowun Dodum', 'sans-serif']
    }
  },
  plugins: []
};
export default config;
