import { Alert } from 'react-native';

// Placeholder for internationalization
const t = (key: string) => key;

export class ToastService {
  static success(message: string, title?: string) {
    Alert.alert(
      title || t('Success'),
      message,
      [{ text: t('OK'), style: 'default' }]
    );
  }

  static error(message: string, title?: string) {
    Alert.alert(
      title || t('Error'),
      message,
      [{ text: t('OK'), style: 'default' }]
    );
  }

  static info(message: string, title?: string) {
    Alert.alert(
      title || t('Info'),
      message,
      [{ text: t('OK'), style: 'default' }]
    );
  }

  static warning(message: string, title?: string) {
    Alert.alert(
      title || t('Warning'),
      message,
      [{ text: t('OK'), style: 'default' }]
    );
  }

  static custom(title: string, message: string, buttons?: any[]) {
    Alert.alert(
      title,
      message,
      buttons || [{ text: t('OK'), style: 'default' }]
    );
  }
}

// Export individual methods for convenience
export const toast = ToastService;
export default ToastService;