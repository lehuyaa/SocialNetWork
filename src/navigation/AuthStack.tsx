import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../feature/auth/LoginScreen';
import Register from '../feature/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#3740FE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Register' }}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login', headerLeft: null }}

        />
    </Stack.Navigator>
);

export default AuthStack;