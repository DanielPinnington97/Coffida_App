/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';
import Register from '../screens/register';
import Splash from '../screens/splash';
import HomeStack from './homeStack';
import DrawerStack from './drawerStack';

const RootStack = createStackNavigator();

export default function() {
  return (
      <RootStack.Navigator headerMode="none" >
          <RootStack.Screen name="Splash" component={Splash} />
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Register" component={Register} />
          <RootStack.Screen name="Drawer" component={DrawerStack} />
      </RootStack.Navigator>
  );
}


// THE ROOT STACK WILL CONTAIN THE LOGIN, REGISTER AND SPLASH SCREENS and a Second stack that will contain the Home pages.
