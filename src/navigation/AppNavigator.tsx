import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAppSelector } from '../store/hooks';
import { RootStackParamList, TabParamList, DrawerParamList } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

// Auth Navigator
import AuthNavigator from './AuthNavigator';

// Main Screens
import HomeScreen from '../screens/main/HomeScreen';
import TransactionsScreen from '../screens/main/TransactionsScreen';
import BudgetScreen from '../screens/main/BudgetScreen';
import GoalsScreen from '../screens/main/GoalsScreen';
import InvestmentsScreen from '../screens/main/InvestmentsScreen';

// Detail Screens
import TransactionDetailScreen from '../screens/details/TransactionDetailScreen';
import BudgetDetailScreen from '../screens/details/BudgetDetailScreen';
import GoalDetailScreen from '../screens/details/GoalDetailScreen';
import InvestmentDetailScreen from '../screens/details/InvestmentDetailScreen';
import AccountDetailScreen from '../screens/details/AccountDetailScreen';

// Modal Screens
import AddTransactionScreen from '../screens/modals/AddTransactionScreen';
import AddBudgetScreen from '../screens/modals/AddBudgetScreen';
import AddGoalScreen from '../screens/modals/AddGoalScreen';
import AddInvestmentScreen from '../screens/modals/AddInvestmentScreen';
import AddAccountScreen from '../screens/modals/AddAccountScreen';
import CameraScreen from '../screens/modals/CameraScreen';
import ReceiptScannerScreen from '../screens/modals/ReceiptScannerScreen';

// Drawer Screens
import ReportsScreen from '../screens/drawer/ReportsScreen';
import AIAssistantScreen from '../screens/drawer/AIAssistantScreen';
import NotificationsScreen from '../screens/drawer/NotificationsScreen';
import ProfileScreen from '../screens/drawer/ProfileScreen';
import SettingsScreen from '../screens/drawer/SettingsScreen';

// Other Screens
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import BiometricSetupScreen from '../screens/auth/BiometricSetupScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// Tab Navigator
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Transactions':
              iconName = 'receipt';
              break;
            case 'Budget':
              iconName = 'pie-chart';
              break;
            case 'Goals':
              iconName = 'flag';
              break;
            case 'Investments':
              iconName = 'trending-up';
              break;
            default:
              iconName = 'circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarStyle: {
          backgroundColor: colors.background.primary,
          borderTopColor: colors.border.light,
          paddingBottom: spacing.xs,
          paddingTop: spacing.xs,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Budget" component={BudgetScreen} />
      <Tab.Screen name="Goals" component={GoalsScreen} />
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
    </Tab.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.background.primary,
          width: 280,
        },
        drawerActiveTintColor: colors.primary.main,
        drawerInactiveTintColor: colors.text.secondary,
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTintColor: colors.text.primary,
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={TabNavigator}
        options={{
          title: 'CashNib',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Reports" 
        component={ReportsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="assessment" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="AIAssistant" 
        component={AIAssistantScreen}
        options={{
          title: 'AI Assistant',
          drawerIcon: ({ color, size }) => (
            <Icon name="smart-toy" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Notifications" 
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Root Stack Navigator
const AppNavigator: React.FC = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { hasCompletedOnboarding } = useAppSelector((state) => state.settings);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background.primary },
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : !hasCompletedOnboarding ? (
        <Stack.Group>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="BiometricSetup" component={BiometricSetupScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Main" component={DrawerNavigator} />
          
          {/* Detail Screens */}
          <Stack.Screen 
            name="TransactionDetail" 
            component={TransactionDetailScreen}
            options={{ headerShown: true, title: 'Transaction Details' }}
          />
          <Stack.Screen 
            name="BudgetDetail" 
            component={BudgetDetailScreen}
            options={{ headerShown: true, title: 'Budget Details' }}
          />
          <Stack.Screen 
            name="GoalDetail" 
            component={GoalDetailScreen}
            options={{ headerShown: true, title: 'Goal Details' }}
          />
          <Stack.Screen 
            name="InvestmentDetail" 
            component={InvestmentDetailScreen}
            options={{ headerShown: true, title: 'Investment Details' }}
          />
          <Stack.Screen 
            name="AccountDetail" 
            component={AccountDetailScreen}
            options={{ headerShown: true, title: 'Account Details' }}
          />
          
          {/* Modal Screens */}
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen 
              name="AddTransaction" 
              component={AddTransactionScreen}
              options={{ headerShown: true, title: 'Add Transaction' }}
            />
            <Stack.Screen 
              name="AddBudget" 
              component={AddBudgetScreen}
              options={{ headerShown: true, title: 'Create Budget' }}
            />
            <Stack.Screen 
              name="AddGoal" 
              component={AddGoalScreen}
              options={{ headerShown: true, title: 'Create Goal' }}
            />
            <Stack.Screen 
              name="AddInvestment" 
              component={AddInvestmentScreen}
              options={{ headerShown: true, title: 'Add Investment' }}
            />
            <Stack.Screen 
              name="AddAccount" 
              component={AddAccountScreen}
              options={{ headerShown: true, title: 'Add Account' }}
            />
            <Stack.Screen 
              name="Camera" 
              component={CameraScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ReceiptScanner" 
              component={ReceiptScannerScreen}
              options={{ headerShown: true, title: 'Scan Receipt' }}
            />
          </Stack.Group>
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;