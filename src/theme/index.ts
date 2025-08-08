import { colors, darkColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

// Main theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
    },
  },
  layout: {
    container: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    section: {
      marginBottom: spacing.lg,
    },
    card: {
      padding: spacing.md,
      borderRadius: 12,
      backgroundColor: colors.background.secondary,
    },
  },
};

// Dark theme
export const darkTheme = {
  ...theme,
  colors: darkColors,
  layout: {
    ...theme.layout,
    card: {
      ...theme.layout.card,
      backgroundColor: darkColors.background.secondary,
    },
  },
};

// Animation durations
export const animations = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Breakpoints for responsive design
export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Export individual theme parts
export { colors, darkColors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';

// Export default theme
export default theme;