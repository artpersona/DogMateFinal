import React, { useEffect, useState, useContext } from 'react'
import {Alert, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import styles from './Style'
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { RadioButton } from 'react-native-paper';
import { firebase, db } from '../../utils/Firebase';
import { StateContext } from '../../StateContext'
function CreateProfile(){
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const [gender, setGender] = useState('male');
    const [dogName, setDogName] = useState('');
    const [dogBD, setDogBD] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [dogOwner, setDogOwner] = useState('');

    const [userInfo, setUserInfo] = useContext(StateContext)


    const uploadImage1 = async () => {
        const res1 = await fetch(image1);
        const blob = await res1.blob();
        const imgTemp = image1.split('/')
        const imgName = imgTemp[imgTemp.length-1]
        var uri = ''
        const ref = firebase.storage().ref().child(`${userInfo.id}/${imgName}`);
        await ref.put(blob)
        .then(snapshot => {
            return ref.getDownloadURL()
            .then(url => {
                console.log(url)
                uri = url
            })
        })
        return uri;
    }

    const uploadImage2 = async () => {
        const res1 = await fetch(image2);
        const blob = await res1.blob();
        const imgTemp = image2.split('/')
        const imgName = imgTemp[imgTemp.length-1]
        var uri = ''
        const ref = firebase.storage().ref().child(`${userInfo.id}/${imgName}`);
        await ref.put(blob)
        .then(snapshot => {
            return ref.getDownloadURL()
            .then(url => {
                console.log(url)
                uri = url
            })
        })
        return uri;
    }

    const uploadImage3 = async () => {
        const res1 = await fetch(image3);
        const blob = await res1.blob();
        const imgTemp = image3.split('/')
        const imgName = imgTemp[imgTemp.length-1]
        var uri = ''
        const ref = firebase.storage().ref().child(`${userInfo.id}/${imgName}`);
        await ref.put(blob)
        .then(snapshot => {
            return ref.getDownloadURL()
            .then(url => {
                console.log(url)
                uri = url
            })
        })
        return uri;
    }


    const handleSubmit = async () => {

        if(dogName==''||dogBreed=='',dogBD==''||dogOwner==''){
            Alert.alert(
                "Incomplete Info",
                "Please fill up all necessary fields",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }

        else{
            var img1 = await uploadImage1()
            var img2 = await uploadImage2()
            var img3 = await uploadImage3()
    
           
    
            db.collection('users').doc(userInfo.id).set({
                matchReady: true,
                dog_name: dogName,
                dog_bd: dogBD,
                dog_gender: gender,
                dog_breed: dogBreed,
                dog_owner: dogOwner,
                img1,
                img2,
                img3
            })
        }

        


    }

    let [fontsLoaded] = useFonts({
        Montserrat: require('../../../assets/fonts/Montserrat-Medium.ttf'),
      });


      const  openImagePickerAsync = async (num) => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if(num==1){
            setImage1(pickerResult.uri)
        }
        if(num==2){
            setImage2(pickerResult.uri)
        }
        if(num==3){
            setImage3(pickerResult.uri)
        }
       
        
      }
    if(!fontsLoaded){
        return(
            <AppLoading></AppLoading>
        )
        
    }
    else{

    
        return(
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                        
                        <View style={styles.image_container} >
                                    <TouchableWithoutFeedback onPress={() => {openImagePickerAsync(1)}}>
                                        <View style={styles.image_picker} >
                                            <Image style={styles.image}source = {{uri: image1}}/> 
                                            <AntDesign style={styles.plus_icon} name="pluscircle" size={26} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    
                                    <TouchableWithoutFeedback  onPress={() => {openImagePickerAsync(2)}}>
                                        <View style={styles.image_picker} >
                                            <Image style={styles.image}source = {{uri: image2}}/> 
                                            <AntDesign style={styles.plus_icon} name="pluscircle" size={26} />
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback  onPress={() => {openImagePickerAsync(3)}}>
                                        <View style={styles.image_picker} >
                                            <Image style={styles.image}source = {{uri: image3}}/> 
                                            <AntDesign style={styles.plus_icon} name="pluscircle" size={26} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>

                                <View style={styles.dogInfo}>
                                    <Text style={styles.header}>Get started</Text>
                                    <View style={styles.horizontalLine}/>   

                                    <View style={styles.dogForm}>
                                        <Text style={styles.label}>Dog's Name</Text>
                                        <TextInput
                                        style={styles.inputForm}
                                        clearTextOnFocus
                                        placeholder="Enter your pet's name"
                                        placeholderTextColor= '#9e9898' 
                                        onChangeText={text => setDogName(text)}
                                        value={dogName}
                                         />
                                    </View>

                                    <View style={styles.dogForm}>
                                        <Text style={styles.label}>Dog's Birthdate</Text>
                                        <TextInput
                                        style={styles.inputForm}
                                        clearTextOnFocus
                                        placeholder="MM/DD/YYYY"
                                        placeholderTextColor= '#9e9898' 
                                        onChangeText={text => setDogBD(text)}
                                        value={dogBD}
                                         />
                                    </View>
                                    <View style={styles.dogForm}>
                                    <Text style={styles.label}>Dog's Gender</Text>
                                        <View style={styles.radioButtons}>

                                            <View style={styles.buttonGroup}>
                                                <Text style={styles.radioLabel}>Male</Text>
                                                <RadioButton
                                                        value="male"
                                                        status={ gender === 'male' ? 'checked' : 'unchecked' }
                                                        onPress={() => setGender('male')}
                                                        
                                                    />
                                            </View>
                                            <View style={styles.buttonGroup}>
                                                <Text style={[styles.radioLabel, styles.left]}>Female</Text>
                                                <RadioButton
                                                        value="female"
                                                        status={ gender === 'female' ? 'checked' : 'unchecked' }
                                                        onPress={() => setGender('female')}
                                                        color= "red"
                                                />
                                            </View>   
                                                
                                        </View>
                                    </View>
                                    

                            
                                    <View style={styles.dogForm}>
                                        <Text style={styles.label}>Dog's Breed</Text>
                                        <TextInput
                                        style={styles.inputForm}
                                        clearTextOnFocus
                                        placeholder="Enter your pet's breed"
                                        placeholderTextColor= '#9e9898' 
                                        onChangeText={text => setDogBreed(text)}
                                        value={dogBreed}
                                        />
                                    </View>

                                    <View style={styles.dogForm}>
                                        <Text style={styles.label}>Owner</Text>
                                        <TextInput
                                        style={styles.inputForm}
                                        clearTextOnFocus
                                        placeholder="Enter your name"
                                        placeholderTextColor= '#9e9898' 
                                        onChangeText={text => setDogOwner(text)}
                                        value={dogOwner}
                                        />
                                    </View>

                                    <TouchableOpacity style={styles.attachmentButton}>
                                        
                                        <View style={styles.attachment}>
                                            <Text style={styles.attachmentText}>Add vaccination record</Text>
                                            <AntDesign name="plus" size={18} color="red" />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}> 
                                        <Text style={styles.submitText}>Start Matching!</Text>
                                    </TouchableOpacity>
                                  
                                </View>
                               
                            
                        </View>
                </ScrollView>
                
            </SafeAreaView>

        )
    }
}
export default CreateProfile