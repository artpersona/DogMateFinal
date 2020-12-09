import {StyleSheet} from 'react-native'

export default  StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image_container:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
     
        marginTop: 10
        
    },
    image:{
        width: 120,
        height: 150,
        borderColor:'red', // if you need 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: 'red',
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image_picker:{
        width: 120,
     
     
    },
    plus_icon:{
       marginLeft: 90,
       marginTop: -30,
       color: '#ff0040'
    },

    dogInfo:{
        width: '100%',
        height: 530,
        backgroundColor: 'white',
        marginTop: 10,
        borderTopStartRadius: 35,
        borderTopEndRadius: 35
    },

    header:{
        fontFamily: 'Montserrat',
        fontSize: 21,
        marginTop: 15,
        marginLeft: 20,
        width: '100%',
       fontWeight: "600"
        
    },
    horizontalLine:{
        width: '90%',
        borderWidth: 1,
        borderColor: 'pink',
        borderBottomColor:'whitesmoke',
        alignSelf: 'center',
        marginTop: 8
        
    },
    dogForm:{
        marginTop: 10,
        alignSelf: 'center',
        width: '90%',
       
        
    },
    
    inputForm:{
        alignSelf: 'center',
        width:'100%',
        height: 37,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 12
    },

    inputForm2:{
        alignSelf: 'center',
        width:'55%',
        height: 37,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 12
    },

    label: {
        marginBottom: 5,
        fontFamily: 'Montserrat',
    },

    radioButtons:{
        flexDirection: 'row'
    },

    buttonGroup:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    radioLabel:{
        fontFamily: 'Montserrat',
    },

    left:{
        marginLeft: 10
    },

    attachmentButton:{
      borderWidth: 1,
      width: '50%',
      borderColor: 'pink',
      marginLeft: 20,
      marginTop: 10,
      padding: 5,
      paddingLeft: 9,
      borderRadius: 40,
      backgroundColor:'white'
      
    },

    attachment:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    attachmentText:{
        fontFamily:'Montserrat',
        fontSize: 13,
        color: 'red'
    },

    submitButton:{
        width:'90%',
        height: 40,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    submitText:{
        alignSelf: 'center',
        color: 'white',
        fontSize : 15,
        fontFamily: 'Montserrat'
    }


});