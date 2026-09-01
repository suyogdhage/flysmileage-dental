export const colors = {
  primary: "#E1132F",
  onPrimary: "#FFFFFF",
  ink: "#0A132E",
  muted: "#666666",
  secondary: "#404A3D",
  tertiary: "#816767",
  surface: "#F6F3ED",
  surfaceAlt: "#FFFFFF",
} as const;

export const typography = {
  fontFamilies: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
  fontSizes: {
    heroDisplay: "55px",
    headingLg: "24px",
    headingMd: "24px",
    headingSm: "22px",
    button: "15px",
    buttonSm: "14px",
    body: "16px",
    bodyLg: "18px",
    bodySm: "14px",
    bodyTight: "16px",
    statDisplayLg: "100px",
    statDisplayMd: "50px",
    statDisplaySm: "35px",
  },
  fontWeights: {
    heading: 600,
    body: 400,
  },
  lineHeights: {
    heroDisplay: 1.2,
    headingLg: 1.25,
    headingMd: 1.4,
    headingSm: 1.1,
    button: 1.6,
    buttonSm: 1.6,
    body: 1.6,
    bodyLg: 1.55,
    bodySm: 1.5,
    bodyTight: 1.4,
    statDisplayLg: 1,
    statDisplayMd: 1,
    statDisplaySm: 1,
  },
  letterSpacings: {
    button: "0.5px",
    normal: "normal",
  },
} as const;

export const spacing = {
  xs: "5px",
  sm: "10px",
  md: "12px",
  base: "16px",
  lg: "20px",
  xl: "25px",
  "2xl": "30px",
  "3xl": "35px",
  "4xl": "40px",
  "5xl": "50px",
  "6xl": "60px",
  section: "120px",
} as const;

export const radii = {
  sm: "5px",
  md: "6px",
  lg: "20px",
  pill: "30px",
  pillLg: "50px",
  full: "9999px",
} as const;

export const components = {
  navbar: {
    height: "100px",
    position: "static" as const,
  },
  footer: {
    height: "859px",
    columns: 4,
  },
  button: {
    padding: "12px 30px",
  },
  card: {
    padding: "20px",
  },
  badge: {
    padding: "5px 10px",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;