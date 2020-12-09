
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from '../screens/TestScreen'
import CreateProfile from '../screens/Profile/CreateProfile'
import MainNavigator from './MainNavigator'

const Stack = createStackNavigator()
export default function ScreenNavigator(){
   return(
    <Stack.Navigator  initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={MainNavigator} />
        <Stack.Screen name="Create a Profile" component={CreateProfile} />
   </Stack.Navigator>
   )

 
}