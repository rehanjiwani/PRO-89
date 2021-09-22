import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';

import {Icon} from 'react-native-elements';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      //drawer : <Icon name="home" type="font-awesome" />
      //Icon : <Icon name="home" type="font-awesome" />
      //Avatar : <Icon name="home" type="font-awesome" />
      drawerIcon : <Icon name="home" type="font-awesome" />
    }
    },
  MyBarters:{
      screen : MyBartersScreen,
    },
  Notifications :{
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell"  type="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
    Setting : {
      screen : SettingScreen,
      navigationOptions:{
        drawerIcon : <Icon name="gift" type ="font-awesome" />,
        drawerLabel : "My Received Books"
      }
    }
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })
