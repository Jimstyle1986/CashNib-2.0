import { AppSettings } from '../types';
import { apiService } from './api';

export class SettingsService {
  static async getSettings(): Promise<AppSettings> {
    const response = await apiService.get('/settings');
    return response.data;
  }

  static async updateSettings(settings: Partial<AppSettings>): Promise<AppSettings> {
    const response = await apiService.put('/settings', settings);
    return response.data;
  }

  static async resetSettings(): Promise<AppSettings> {
    const response = await apiService.post('/settings/reset');
    return response.data;
  }

  static async updateNotificationSettings(notifications: any): Promise<AppSettings> {
    const response = await apiService.put('/settings/notifications', { notifications });
    return response.data;
  }

  static async updatePrivacySettings(privacy: any): Promise<AppSettings> {
    const response = await apiService.put('/settings/privacy', { privacy });
    return response.data;
  }

  static async updateSecuritySettings(security: any): Promise<AppSettings> {
    const response = await apiService.put('/settings/security', { security });
    return response.data;
  }
}