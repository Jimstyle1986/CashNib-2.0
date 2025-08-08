import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Specialized hooks for common state selections
export const useAuth = () => useAppSelector((state) => state.auth);
export const useUser = () => useAppSelector((state) => state.auth.user);
export const useBudgets = () => useAppSelector((state) => state.budget);
export const useTransactions = () => useAppSelector((state) => state.transactions);
export const useGoals = () => useAppSelector((state) => state.goals);
export const usePortfolio = () => useAppSelector((state) => state.investments);
export const useNotifications = () => useAppSelector((state) => state.notifications);
export const useSettings = () => useAppSelector((state) => state.settings);
export const useTheme = () => useAppSelector((state) => state.settings.theme);
export const useCurrency = () => useAppSelector((state) => state.settings.currency);
export const useUI = () => useAppSelector((state) => state.ui);
export const useLoading = () => useAppSelector((state) => state.ui.isLoading);
export const useError = () => useAppSelector((state) => state.ui.error);