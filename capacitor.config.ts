import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.testapp.app',
  appName: 'test_app',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.146:3000',
    cleartext: true
  }
};

export default config;
