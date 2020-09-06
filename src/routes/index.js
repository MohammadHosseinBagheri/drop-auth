import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Home from './home/Home';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator>
    <Stack.Screen component={Login} name="login" />
    <Stack.Screen component={Register} name="register" />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen component={Home} name="home" />
  </Stack.Navigator>
);

const Config = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={Register} name="register" />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Config;
