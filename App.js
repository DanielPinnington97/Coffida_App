import React from 'react';
import RootStack from './navigation/rootStack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './navigation/drawerStack';

export default function () {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
