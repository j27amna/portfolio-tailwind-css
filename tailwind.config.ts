import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        },
      },
      backgroundImage : {
        'contact-image': "url(/bgimg.jpg)",
        'video': "url(/video2.mp4)"
      }
    },
  },
  plugins: [],
};
export default config;
