import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],   // Space Grotesk
        body: ['var(--font-body)', 'sans-serif'],        // Noto Sans
      },
      colors: {
        'ink': '#0D0D0D',
        'ink-soft': '#1C1C1C',
        'gold': '#C9A96E',
        'gold-light': '#E8D5B0',
        'cream': '#F7F5F0',
        'mist': '#EDEBE6',
        'stone': '#8A8885',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: { 
          '0%': { transform: 'translateX(0)' }, 
          '100%': { transform: 'translateX(-50%)' } 
        },
      },
    },
  },
  plugins: [],
};
export default config;
