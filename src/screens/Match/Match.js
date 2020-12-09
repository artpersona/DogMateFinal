import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import StartUp from '../../components/Profile/StartUp'
import styles from './Style'
function Match({navigation}){

    return(
        <View style={styles.container}>
            <StartUp navigation={navigation}></StartUp>
        </View>
    )
}

export default Match