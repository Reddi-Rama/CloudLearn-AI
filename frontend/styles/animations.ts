export const animations = {
  fast: "150ms",
  normal: "300ms",
  slow: "600ms",

  easing: "cubic-bezier(.4,0,.2,1)",

  hover: "all .3s ease",

  floating: "floating 6s ease-in-out infinite",

  cloud: "moveCloud 120s linear infinite",
} as const;

export type Animations = typeof animations;