export const colors = {
  primary: "#0EA5E9",
  primaryDark: "#0284C7",

  secondary: "#6366F1",

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",

  background: "#F8FBFF",
  surface: "#FFFFFF",

  text: {
    primary: "#0F172A",
    secondary: "#475569",
    muted: "#94A3B8",
  },

  border: "#E2E8F0",

  gradient: {
    sky: "linear-gradient(135deg,#38BDF8,#2563EB)",
    violet: "linear-gradient(135deg,#8B5CF6,#6366F1)",
    success: "linear-gradient(135deg,#22C55E,#16A34A)",
  },
} as const;

export type Colors = typeof colors;