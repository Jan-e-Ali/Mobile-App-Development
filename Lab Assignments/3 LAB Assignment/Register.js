import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'


/**
* @author
* @function Register
**/
export const Register = ({navigation}) => {

const { container } = styles
 return(
  <View style={container}>
    
  <Image style={{height:200,width:200,}} source={{uri:'https://images.template.net/76791/Free-Instagram-Logo-Vector-1.jpg'}}></Image>  
  <Text style={{fontSize: 20,fontWeight: 'bold',color:'grey',margin:5}}>Sign up to see photos and videos from your friends.</Text>
 
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Mobile Number or Email'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Full Name'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Username'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Password'

  ></TextInput>


  <text style={{fontSize: 15,color:'grey',margin:'10'}}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .

</text>
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text}>           Signup</Text>
  </TouchableOpacity>
 
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#ffffff',
     height:'100%',
     width:'100%'
    },
    
    View:{
      marginTop:"3%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:200,
       width:200,
       padding:10,
       borderColor:'grey',
       borderWidth:2
    },
    Text:{
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
      alignContent:'center',
      justifyContent:'center'
  
  
    },
    button:{
      backgroundColor:'dodgerblue',
      height:30,
      width:150,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
  
  })