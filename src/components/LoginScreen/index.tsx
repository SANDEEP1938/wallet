import React, { useState } from 'react';
import { Alert, View, TextInput, Button, useColorScheme, Pressable, Text, StyleSheet, StatusBar } from 'react-native';
import { validateCredentials, validateEmail, validatePassword } from '../../utils/validation';
import { getUserEmail, storeUserEmail } from '../../utils/storage';

const LoginContainer = ({ navigation }: { navigation: any }): React.JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const themeColor =useColorScheme();

  getUserEmail().then(Response => {
    if(!!Response)navigation.navigate('Home')
  })
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }else if(!validatePassword(password)){
      Alert.alert('Please enter a valid Password.');
      return;
    }else if (!validateCredentials(email,password)) {
      Alert.alert('Incorrect credentials.');
      return;
    }
    else{
        storeUserEmail(email)
        navigation.navigate('Home')
      }
  };

  return (
      <View style={styles.block}>
        <StatusBar backgroundColor={themeColor=='dark'?'#fff':'#000'}/>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable
          style={styles.button}
          onPress={handleLogin}><Text>Login</Text></Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightyellow',
    alignSelf: 'center',
    padding: 20,
    paddingHorizontal: 50,
    borderColor: '#000',
    borderRadius: 20
  },
  block: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10
  }
})
export default LoginContainer;
