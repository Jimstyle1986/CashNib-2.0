// Base spacing unit (4px grid system)
const baseUnit = 4;

// Spacing scale
export const spacing = {
  // Base units
  xs: baseUnit, // 4px
  sm: baseUnit * 2, // 8px
  md: baseUnit * 3, // 12px
  lg: baseUnit * 4, // 16px
  xl: baseUnit * 6, // 24px
  '2xl': baseUnit * 8, // 32px
  '3xl': baseUnit * 12, // 48px
  '4xl': baseUnit * 16, // 64px
  '5xl': baseUnit * 20, // 80px
  '6xl': baseUnit * 24, // 96px
  
  // Semantic spacing
  screenPadding: baseUnit * 4, // 16px
  cardPadding: baseUnit * 4, // 16px
  cardMargin: baseUnit * 3, // 12px
  sectionSpacing: baseUnit * 6, // 24px
  
  // Input spacing
  inputPadding: baseUnit * 3, // 12px
  inputMargin: baseUnit * 2, // 8px
  
  // Button spacing
  buttonPadding: baseUnit * 3, // 12px
  buttonMargin: baseUnit * 2, // 8px
  
  // List spacing
  listItemPadding: baseUnit * 4, // 16px
  listItemMargin: baseUnit * 2, // 8px
  
  // Header spacing
  headerHeight: baseUnit * 14, // 56px
  headerPadding: baseUnit * 4, // 16px
  
  // Tab bar spacing
  tabBarHeight: baseUnit * 15, // 60px
  tabBarPadding: baseUnit * 2, // 8px
  
  // Modal spacing
  modalPadding: baseUnit * 6, // 24px
  modalMargin: baseUnit * 4, // 16px
  
  // Border radius
  borderRadius: {
    xs: baseUnit, // 4px
    sm: baseUnit * 2, // 8px
    md: baseUnit * 3, // 12px
    lg: baseUnit * 4, // 16px
    xl: baseUnit * 6, // 24px
    full: 9999,
  },
  
  // Border width
  borderWidth: {
    thin: 1,
    medium: 2,
    thick: 4,
  },
  
  // Shadow elevation
  elevation: {
    low: 2,
    medium: 4,
    high: 8,
    highest: 16,
  },
  
  // Icon sizes
  iconSize: {
    xs: baseUnit * 3, // 12px
    sm: baseUnit * 4, // 16px
    md: baseUnit * 6, // 24px
    lg: baseUnit * 8, // 32px
    xl: baseUnit * 12, // 48px
  },
  
  // Avatar sizes
  avatarSize: {
    xs: baseUnit * 6, // 24px
    sm: baseUnit * 8, // 32px
    md: baseUnit * 10, // 40px
    lg: baseUnit * 12, // 48px
    xl: baseUnit * 16, // 64px
    '2xl': baseUnit * 20, // 80px
  },
  
  // Chart dimensions
  chartHeight: {
    small: baseUnit * 50, // 200px
    medium: baseUnit * 75, // 300px
    large: baseUnit * 100, // 400px
  },
  
  // Minimum touch target size (accessibility)
  minTouchTarget: baseUnit * 11, // 44px
  
  // Safe area insets (for devices with notches)
  safeArea: {
    top: baseUnit * 11, // 44px
    bottom: baseUnit * 8, // 32px
  },
};

// Export default spacing
export default spacing;