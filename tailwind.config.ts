import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
      title: "var(--font-bebas)"
    },
    boxShadow: {
                'neuro-inset': 'inset 2px 2px 2px #b8b9be, inset -3px -3px 7px #ffffff',
                'neuro-inset-dark': 'inset 2px 2px 2px #000000, inset -2px -2px 4px rgb(31 41 55)',
                neuro: '2px 2px 5px rgb(0 0 0 / 0.1), -2px -2px 5px rgb(0 0 0 / 0.1)',
                'neuro-dark': '2px 2px 5px rgb(31 41 55), -2px -2px 5px rgb(31 41 55)',
                'md-dark': '0 4px 6px -1px rgb(31 41 55), 0 2px 4px -2px rgb(31 41 55)',
            },
    backgroundColor: {
      dark: 'rgb(20, 27, 31)',
    }
    },
  },
  plugins: [],
}
export default config
