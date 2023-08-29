import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {LoginScreen, TodoScreen, SplashScreen} from './screens';
import {SafeAreaView} from 'react-native';
import {loginProcess} from './api';
import {checkSignedIn} from './redux/slice/authenticationSlice';
import {useEffect} from 'react';
import MainContainer from './navigation/MainContainer';
const Stack = createStackNavigator();

function Router() {
  const dispatch = useDispatch();

  

  return (
    <SafeAreaView style={{flex: 1}}>
     
      <MainContainer/>

    </SafeAreaView>
    
  );
}

export default Router;
/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="to-do-screen" component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>  */