/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (

    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}


// THE ROOT STACK WILL CONTAIN THE LOGIN, REGISTER AND SPLASH SCREENS and a Second stack that will contain the Home pages.
