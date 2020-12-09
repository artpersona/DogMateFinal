import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import {firebase} from '../../utils/Firebase'
import styles from './Style'
import { StateContext } from '../../StateContext'
function Test(){
const [userInfo, setUserInfo] = useContext(StateContext)
    const logout = () => {
        console.log('Clicked')
        firebase.auth().signOut()
    }
    return(
        <View style={styles.container}>
            <Text onPress={logout}>Logout</Text>
            <Text>{userInfo.first_name}</Text>
        </View>
    )
}

export default Test