
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../components/DashboardScreen';
import LoginContainer from '../components/LoginScreen';
import { Text } from 'react-native';
import { clearUserAuthState, getUserEmail } from '../utils/storage';
import SetLimit from '../components/SetLimit';
import { styles } from './styles';

const Navigator = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    getUserEmail().then(Response => {
        setIsAuthenticated(!!Response)
    })
    const Stack = createNativeStackNavigator();
    const handleLogout = async (navigation: any) => {
        await clearUserAuthState();
        navigation.navigate('Login');
    };
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isAuthenticated ? 'Home' : 'Login'}
                screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#F1F0F5'
                    }
                }}>
                <Stack.Screen name="Login" component={LoginContainer} />
                <Stack.Screen name="Home" component={DashboardScreen}
                    options={({ navigation }) => ({
                        headerTitleStyle: styles.headerTitleStyle,
                        title: 'Spending Dashboard',
                        headerRight: () => (
                            <Text
                                style={styles.rightText}
                                onPress={() => handleLogout(navigation)}>
                                {`Logout`}
                            </Text>
                        ),
                        headerBackVisible: false
                    })
                    } />
                <Stack.Screen name="SetLimit" component={SetLimit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
