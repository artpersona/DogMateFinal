import {StyleSheet} from 'react-native'

export default  StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth:1,
   
    
},
  logo_img:{
    
      width: 300,
      height: 400
  },
  title:{
      fontWeight:'bold',
      fontSize:30
  },
  subtitle:{
      marginTop: 5,
  },
  wrapper:{
      alignItems:'center'
  },
  textWrapper:{
      alignItems:'center'
  },

  buttonGroup:{
      marginTop: 50
  },
  buttonContainer:{
    
      justifyContent: 'center',
      width: 300,
      backgroundColor: 'white',
      borderRadius: 30,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 5,
      marginBottom: 5,
      borderWidth: 1
  },
  button:{
      width: '100%',
      flexDirection: 'row',

  },
  buttonText:{
      
      marginLeft: 30,
      fontSize: 18,
  },

  buttonLogo:{
      width: 34
  },

  googleIcon:{
    color: '#db4a39'
  },
  facebookIcon:{
      color: '#3b5998'
  }
  });


