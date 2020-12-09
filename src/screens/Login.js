
import React, { useContext } from 'react';

import {Text, View, Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import {firebase, db} from '../utils/Firebase'
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import styles from './Style'
import { StateContext } from '../StateContext'
Facebook.initializeAsync('206032301143230','DogMate');


export default function Login() {
    const [userInfo, setUserInfo] = useContext(StateContext)
    async function signInWithFacebook(){
        const appId = Expo.Constants.manifest.extra.facebook.appId;
        const permissions = ['public_profile','email']
    
        const {
            type,
            token,
        } = await Facebook.logInWithReadPermissionsAsync(
            {appId,
            permissions}
        );
    
        switch(type){
            case 'success':{
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                const credential = firebase.auth.FacebookAuthProvider.credential(token)
                const facebookProfileData = await firebase.auth().signInWithCredential(credential)
                
                console.log(facebookProfileData)
                const data = facebookProfileData.additionalUserInfo.profile
                const isNewUser = facebookProfileData.additionalUserInfo.isNewUser;
                const userData = {
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name
                }

                console.log('userDATA :',userData)
                setUserInfo(userData)
                if(isNewUser){
                    db.collection('users').doc(data.id).set({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        picture: data.picture.data.url
                    })

                }
                
                
           
            }
    
            case 'cancel':{
                return Promise.reject({type: 'cancel'})
            }
        }
    }


    const signInWithGoogle = async function() {
        try {
          const result = await Google.logInAsync({
            androidClientId:'641783606412-kinkicvedr8gic2duibgsdf185a5a9h0.apps.googleusercontent.com',
            iosClientId:'641783606412-r4n2k1padk3eq15vb039vsdreg9u9m02.apps.googleusercontent.com',
            
            scopes: ["profile", "email"]
          });
      
          if (result.type === "success") {
            console.log('pasok')
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
            const googleProfileData = await firebase.auth().signInWithCredential(credential);
            const data = googleProfileData.additionalUserInfo.profile
            const isNewUser = googleProfileData.isNewUser


            const userData = {
                id: data.sub,
                first_name: data.given_name,
                last_name: data.family_name,
                has_card: false
            }

            console.log('userDATA :',userData)
            setUserInfo(userData)

            //Data contains 
                /*
                    given_name
                    family_name
                    sub
                    picture
                
                
                */

            if(isNewUser){

                db.collection('users').doc(data.sub).set({
                    first_name: data.given_name,
                    last_name: data.family_name,
                    picture: data.picture,
                    has_card: false
                })

                
            }

            console.log(googleProfileData)


          } else {
            return { cancelled: true };
          }
        } catch (err) {
          console.log("err:", err);
        }
      };

   




    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require('../../src/images/logo.png') } style={styles.logo_img}/>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Dog Mate</Text>
                    <Text style={styles.subtitle}>Find a partner for your dog today!</Text>
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={signInWithGoogle}>
                        <View style={styles.button}>
                        <AntDesign name="googleplus" size={30} style={[styles.buttonLogo, styles.googleIcon]} color="black" />
                        <Text style={styles.buttonText}>Login With Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={signInWithFacebook}>
                        <View style={styles.button}>
                        <FontAwesome name="facebook-f" size={30} style={[styles.buttonLogo, styles.facebookIcon]}  color="black" />
                        <Text style={styles.buttonText}>Login With Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      );
}


