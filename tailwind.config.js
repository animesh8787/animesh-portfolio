/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#14161A",
        surface: "#1B1E23",
        surface2: "#22262D",
        hairline: "#2A2E35",
        ink: "#E9EAEC",
        muted: "#9297A1",
        faint: "#5B6068",
        signal: {
          DEFAULT: "#12B886",
          bright: "#3DDC9A",
          dim: "#0B6E52",
        },
      },
      fontFamily: {
        display: ["'Newsreader'", "serif"],
        sans: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(18,184,134,0.18)",
        glowLg: "0 0 64px rgba(18,184,134,0.16)",
        card: "0 4px 24px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        // shared "premium" ease — used for every deliberate motion on the
        // site so hover states, reveals, and page transitions all decelerate
        // the same way.
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(8px,-6px)" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
