import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation';
import { store } from './src/state/store.js';
import { StoreProvider } from 'zustand';
import { initializeFirebase } from './src/services/firebase';

// Initialize Firebase when the app starts
initializeFirebase();

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;