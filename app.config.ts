import { ExpoConfig } from '@expo/config';

const config: ExpoConfig = {
  name: 'CalorieTracker',
  slug: 'calorie-tracker',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png', // You'll need to add an icon file
  splash: {
    image: './src/assets/splash.png', // You'll need to add a splash screen file
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: [
    '**/*',
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png', // You'll need to add an adaptive icon
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './src/assets/favicon.png', // You'll need to add a favicon
  },
  extra: {
    firebase: {
      apiKey: 'YOUR_FIREBASE_API_KEY',
      authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN',
      projectId: 'YOUR_FIREBASE_PROJECT_ID',
      storageBucket: 'YOUR_FIREBASE_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
      appId: 'YOUR_FIREBASE_APP_ID',
      measurementId: 'YOUR_FIREBASE_MEASUREMENT_ID', // Optional
    },
  },
};

export default config;