import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand:  { DEFAULT: '#06653E', dark: '#055A37', ink: '#000000' },
        body:   '#333333',
        tint:   { blue: '#EAF6FA', blue2: '#ECF2FC', green: '#E4FEF4' },
        hold:   { bg: '#FFF7E6', border: '#E0A32E', text: '#8A5A00' },
      },
      fontFamily: { sans: ['Roboto', 'system-ui', 'sans-serif'] },
      maxWidth: { site: '1140px' },
    },
  },
  plugins: [],
} satisfies Config
