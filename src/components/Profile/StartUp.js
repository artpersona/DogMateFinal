import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Style'
import { EvilIcons } from '@expo/vector-icons';

export default function StartUp({navigation}){
    function navigateTest(){
        navigation.navigate('Create a Profile')
    }
    return(     
        <View style={styles.container}>
            <Image source={require('../../images/dogo1.png') } style={styles.logo_img}/>
            <Text style={styles.subtext}>Setup your Dog's dating profile!</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={navigateTest}>
                        <View style={styles.button}>
                            <EvilIcons name="heart" size={30} color="black" />
                            <Text style={styles.buttonText}>Get Started!</Text>
                        </View>
                </TouchableOpacity>
        </View>
    )
}