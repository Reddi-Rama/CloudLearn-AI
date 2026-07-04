/**
 * ==========================================================
 * CloudLearn Typography
 * ==========================================================
 */

export const typography = {
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },

  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  headings: {
    hero: {
      fontSize: "5rem",
      fontWeight: 900,
      lineHeight: 1.05,
    },

    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
    },

    h2: {
      fontSize: "3rem",
      fontWeight: 800,
      lineHeight: 1.15,
    },

    h3: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },

    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },

  body: {
    large: {
      fontSize: "1.25rem",
      lineHeight: 1.9,
    },

    normal: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    small: {
      fontSize: "0.875rem",
      lineHeight: 1.7,
    },
  },

  button: {
    large: {
      fontSize: "1.125rem",
      fontWeight: 700,
    },

    medium: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    small: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
  },
} as const;

export type Typography = typeof typography;