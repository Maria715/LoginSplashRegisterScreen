import React from 'react';

//Import Navigators from React Navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens needed
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
});

const App = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
