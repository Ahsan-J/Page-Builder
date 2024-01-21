import type { Config } from "tailwindcss";
import theme from './src/constant/theme';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: theme.borderColor,
      backgroundColor: theme.backgroundColor,
      textColor: theme.textColor,
      outlineColor: theme.outlineColor,
      fontSize: theme.fontSize,
      gradientColorStops: theme.backgroundColor,
    },
    screens: {
      'xxs': '340px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
export default config;
