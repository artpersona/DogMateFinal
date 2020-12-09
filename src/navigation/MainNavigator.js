import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/Profile/Profile'
import TestScreen from '../screens/Profile/Test'
import MatchScreen from '../screens/Match/Match'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Match"
    activeColor="red"
    barStyle={{ 
        backgroundColor: 'white',
        borderWidth: 2,
        borderTopColor: 'whitesmoke',
        borderLeftColor: 'white',
        borderRightColor: 'white'
    
    }}
    tabBarOptions
    >
      <Tab.Screen name="Profile"
       component={ProfileScreen}
       options={{
           tabBarLabel: "Your Profile",
           tabBarIcon: () => (
            <SimpleLineIcons name="user" size={24} color="red" />
           )
       }}
     />


      <Tab.Screen name="Match"
       component={MatchScreen}
        options={{
        tabBarLabel: "Match",
        tabBarIcon: () => (
            <MaterialCommunityIcons name="dog" size={26} color="red" />
        )
    }} />


      <Tab.Screen name="Messages"
       component={TestScreen}
       options={{
        tabBarLabel: "Messages",
        tabBarIcon: () => (
            <SimpleLineIcons name="bubbles" size={24} color="black" />
        )
    }} />

    </Tab.Navigator>
  );
}