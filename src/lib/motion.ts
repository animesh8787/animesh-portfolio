/**
 * Shared motion tokens.
 *
 * Every scroll-reveal and hover animation on the site pulls from here so the
 * motion language stays consistent — same ease curve, same rough timing —
 * rather than each component inventing its own feel.
 */

// Matches the CSS `ease-premium` timing function in tailwind.config.js.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeUpLg = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Wrap a group of children in this, then give each child `variants={fadeUp}`. */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
