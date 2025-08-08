// Font weights
export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

// Font sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
} as const;

// Line heights
export const lineHeights = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  '2xl': 36,
  '3xl': 40,
  '4xl': 44,
  '5xl': 56,
  '6xl': 72,
} as const;

// Typography styles
export const typography = {
  // Headings
  h1: {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['4xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['3xl'],
    fontWeight: fontWeights.bold,
    letterSpacing: -0.25,
  },
  h3: {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['2xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: 0,
  },
  h4: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  h6: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.medium,
    letterSpacing: 0.15,
  },
  
  // Body text
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.25,
  },
  
  // Captions and small text
  caption: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.medium,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  },
  
  // Button text
  button: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.medium,
    letterSpacing: 1.25,
    textTransform: 'uppercase' as const,
  },
  
  // Financial amounts
  amount: {
    large: {
      fontSize: fontSizes['3xl'],
      lineHeight: lineHeights['3xl'],
      fontWeight: fontWeights.bold,
      letterSpacing: -0.5,
    },
    medium: {
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    small: {
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
      fontWeight: fontWeights.medium,
      letterSpacing: 0.25,
    },
  },
  
  // Input fields
  input: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.5,
  },
  
  // Labels
  label: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.medium,
    letterSpacing: 0.25,
  },
  
  // Error text
  error: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.4,
  },
  
  // Links
  link: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.medium,
    letterSpacing: 0.25,
    textDecorationLine: 'underline' as const,
  },
};

// Export individual parts
export { fontWeights, fontSizes, lineHeights };

// Export default typography
export default typography;