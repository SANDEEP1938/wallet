import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_EMAIL_KEY = 'user_email';

export const storeUserEmail = async (email:string) => {
  try {
    await AsyncStorage.setItem(USER_EMAIL_KEY, email);
  } catch (error) {
    console.error('Error storing user email:', error);
  }
};

export const getUserEmail = async () => {
  try {
    const email = await AsyncStorage.getItem(USER_EMAIL_KEY);
    return email;
  } catch (error) {
    console.error('Error retrieving user email:', error);
    return null;
  }
};

export const clearUserAuthState = async () => {
  try {
    await AsyncStorage.removeItem(USER_EMAIL_KEY);
  } catch (error) {
    console.error('Error clearing user authentication state:', error);
  }
};
