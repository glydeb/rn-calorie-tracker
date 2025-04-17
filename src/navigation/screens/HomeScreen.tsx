import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../state/store';
import { signOut } from '../../services/firebase';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn, setUser, user } = useStore();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Logout Error:', error.message);
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Calorie Tracker App!</Text>
      {user && <Text>Logged in as: {user?.email}</Text>}
      <Button title="Logout" onPress={handleLogout} />
      {/* We'll add more navigation here later */}
    </View>
  );
};

export default HomeScreen;