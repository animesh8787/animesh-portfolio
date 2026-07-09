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
          DEFAULT: "#5B8DEF",
          bright: "#7DA6F5",
          dim: "#3D5FA3",
        },
        sage: {
          DEFAULT: "#7C9885",
          bright: "#9BB5A2",
        },
      },
      fontFamily: {
        display: ["'Newsreader'", "serif"],
        sans: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(91,141,239,0.18)",
        glowLg: "0 0 64px rgba(91,141,239,0.16)",
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
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        floatSoft: "floatSoft 2.6s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
