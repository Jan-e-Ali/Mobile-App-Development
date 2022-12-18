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
* @function Profile
**/
export const Profile = ({navigation}) => {

const { container } = styles
 return(
  
  <View style={container}>
    
  <Image style={{height:400,width:400,}} source={{uri:'https://images.template.net/76791/Free-Instagram-Logo-Vector-1.jpg'}}></Image>  
 
 <text style={{fontSize: 20,fontWeight:'bold',color:'hotpink'}}> Hey Instagramers</text>
 <text style={{color:'grey',fontweight:'bold'}}>Add informative bio to enhance your Instagram Profile</text>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='          Set up bio'
  keyboardType='name-phone-pad'></TextInput>
  <text>Want another account</text>
  
  <View><TouchableOpacity style={styles.button}
   onPress={() => navigation.goBack()}
   >
    <Text style={styles.Text}>            Register Again</Text>
  </TouchableOpacity>
  
  </View>
  
 
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
    
    View2:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'row'
      
                         
    },
    
    View:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:30,
       width:200,
       padding:10,
       borderColor:'grey',
       borderWidth:3,
  
       borderRadius:30
  
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
      width:200,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
})
