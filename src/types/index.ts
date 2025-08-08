// User and Authentication Types
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
  profile: UserProfile;
}

export interface UserPreferences {
  currency: string;
  language: string;
  timezone: string;
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
  theme: 'light' | 'dark' | 'auto';
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  occupation?: string;
  income?: number;
  financialGoals: string[];
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  budgetAlerts: boolean;
  goalReminders: boolean;
  transactionAlerts: boolean;
  investmentUpdates: boolean;
  weeklyReports: boolean;
  monthlyReports: boolean;
}

export interface PrivacySettings {
  dataSharing: boolean;
  analytics: boolean;
  marketing: boolean;
  biometricAuth: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  hasCompletedOnboarding: boolean;
}

// Financial Types
export interface Budget {
  id: string;
  userId: string;
  name: string;
  description?: string;
  totalAmount: number;
  spentAmount: number;
  remainingAmount: number;
  categories: BudgetCategory[];
  period: 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetCategory {
  id: string;
  name: string;
  allocatedAmount: number;
  spentAmount: number;
  color: string;
  icon: string;
}

export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  category: string;
  subcategory?: string;
  description: string;
  date: Date;
  location?: string;
  tags: string[];
  receiptUrl?: string;
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
  budgetId?: string;
  goalId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecurringPattern {
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: Date;
  occurrences?: number;
}

export interface FinancialGoal {
  id: string;
  userId: string;
  name: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  category: 'savings' | 'debt' | 'investment' | 'purchase' | 'emergency';
  priority: 'low' | 'medium' | 'high';
  isCompleted: boolean;
  milestones: GoalMilestone[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GoalMilestone {
  id: string;
  amount: number;
  date: Date;
  description?: string;
  isCompleted: boolean;
}

export interface Investment {
  id: string;
  userId: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'real_estate';
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  totalValue: number;
  gainLoss: number;
  gainLossPercentage: number;
  purchaseDate: Date;
  dividendYield?: number;
  sector?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BankAccount {
  id: string;
  userId: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment' | 'loan';
  balance: number;
  currency: string;
  bankName: string;
  accountNumber: string;
  routingNumber?: string;
  isActive: boolean;
  isLinked: boolean;
  lastSyncDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'yearly';
  nextPaymentDate: Date;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  category: 'budget' | 'goal' | 'transaction' | 'investment' | 'general';
  isRead: boolean;
  actionUrl?: string;
  data?: Record<string, any>;
  createdAt: Date;
  expiresAt?: Date;
}

// AI and Insights Types
export interface AIInsight {
  id: string;
  userId: string;
  type: 'spending_pattern' | 'budget_optimization' | 'goal_recommendation' | 'investment_advice';
  title: string;
  description: string;
  confidence: number;
  actionable: boolean;
  actions?: InsightAction[];
  data: Record<string, any>;
  createdAt: Date;
  isViewed: boolean;
}

export interface InsightAction {
  id: string;
  label: string;
  type: 'navigate' | 'create' | 'update' | 'delete';
  target: string;
  data?: Record<string, any>;
}

// Chart and Analytics Types
export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  data: number[];
  color?: (opacity: number) => string;
  colors?: Array<(opacity: number) => string>;
  strokeWidth?: number;
}

export interface PieChartData {
  name: string;
  value: number;
  color: string;
  legendFontColor?: string;
  legendFontSize?: number;
}

export interface BarChartData {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      color?: (opacity: number) => string;
      colors?: Array<(opacity: number) => string>;
    }[];
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

export interface TransactionForm {
  amount: string;
  type: 'income' | 'expense' | 'transfer';
  category: string;
  subcategory?: string;
  description: string;
  date: Date;
  accountId: string;
  tags: string[];
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
}

export interface BudgetForm {
  name: string;
  description?: string;
  totalAmount: string;
  period: 'weekly' | 'monthly' | 'yearly';
  startDate: Date;
  categories: BudgetCategoryForm[];
}

export interface BudgetCategoryForm {
  name: string;
  allocatedAmount: string;
  color: string;
  icon: string;
}

export interface GoalForm {
  name: string;
  description?: string;
  targetAmount: string;
  targetDate: Date;
  category: 'savings' | 'debt' | 'investment' | 'purchase' | 'emergency';
  priority: 'low' | 'medium' | 'high';
}

// Navigation Types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Onboarding: undefined;
  BiometricSetup: undefined;
  TransactionDetail: { transactionId: string };
  BudgetDetail: { budgetId: string };
  GoalDetail: { goalId: string };
  InvestmentDetail: { investmentId: string };
  AccountDetail: { accountId: string };
  AddTransaction: { accountId?: string; type?: 'income' | 'expense' };
  AddBudget: undefined;
  AddGoal: undefined;
  AddInvestment: undefined;
  AddAccount: undefined;
  Camera: { mode: 'receipt' | 'document' };
  ReceiptScanner: { imageUri: string };
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
  EmailVerification: { email: string };
  BiometricSetup: undefined;
  Onboarding: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
};

export type TabParamList = {
  Home: undefined;
  Transactions: undefined;
  Budget: undefined;
  Goals: undefined;
  Investments: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
  Reports: undefined;
  AIAssistant: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

// Settings Types
export interface AppSettings {
  currency: string;
  language: string;
  theme: 'light' | 'dark' | 'auto';
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
  security: SecuritySettings;
  hasCompletedOnboarding: boolean;
  biometricEnabled: boolean;
  autoLockTimeout: number;
}

export interface SecuritySettings {
  requireBiometric: boolean;
  requirePinForTransactions: boolean;
  autoLockEnabled: boolean;
  autoLockTimeout: number;
  twoFactorEnabled: boolean;
}

// Export all types
export * from './index';