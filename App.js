
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCtSeV7jaAb_NF3FTGS3BGYeE948C8LNgs",
  authDomain: "login-3e080.firebaseapp.com",
  databaseURL: "https://login-3e080.firebaseio.com",
  projectId: "login-3e080",
  storageBucket: "login-3e080.appspot.com",
  messagingSenderId: "793590580758",
  appId: "1:793590580758:web:fa2a00f6a9132443401737"
};


firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen, 
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);