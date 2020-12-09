import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

import { NavigationContainer } from '@react-navigation/native';

import {firebase} from './src/utils/Firebase'
import { StateProvider } from './src/StateContext'
import { AppLoading } from 'expo';

import ScreenNavigator from './src/navigation/ScreenNavigator';
function App (){
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log('We are authenticated now!');
      setIsAuthenticated(true)
    }
  
    else{
      setIsAuthenticated(false)
    }
  }); 



  return(
    isAuthenticated ? 
    (
    <StateProvider>
      <NavigationContainer>
          <ScreenNavigator></ScreenNavigator>
      </NavigationContainer>
    </StateProvider>

     ) 
    
    
    : 
    <StateProvider>
      <Login></Login>
    </StateProvider>
    
  )
 

}


const styles = StyleSheet.create({
  text: {
    marginTop: 300
  }
})

export default App




