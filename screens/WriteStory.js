import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Text, View,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import MyHeader from '../components/Header'
import { Button } from 'react-native';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state=({
      title:'',
      author:'',
      story:''
    })
  }
    render(){
  return (
    <SafeAreaProvider>
      <View>
        <MyHeader
        text ='Write Your Own Story'
        />
        <View style={style.viewStyle}>
        <TextInput placeholder='Title of Your Book' style={style.Titleinput} onChangeText={(text)=>{
          this.setState({title:text})
        }}/>
        <TextInput placeholder='Name of Author' style={style.authorinput} onChangeText={(text)=>{
          this.setState({author:text})
        }}/>
        <TextInput placeholder='Your Story' style={style.storyinput}onChangeText={(text)=>{
          this.setState({story:text})
        }}/>
        <TouchableOpacity title='submit' style={style.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaProvider>
  );
}
}
const style=StyleSheet.create({
  submitButton:{
    borderWidth:1,
     height:30, 
     width:50,
      alignItems:'center', 
      justifyContent:'center',
       backgroundColor:'green' 
     },
     viewStyle:{
          alignItems:'center', 
          justifyContent:'center',         
     },
     storyinput:{
       width:200,
       height:500,
       alignItems:'center', 
       justifyContent:'center',  
     },
     authorinput:{
      width:200,
      height:20,
      alignItems:'center', 
      justifyContent:'center',  
    },
    Titleinput:{
      width:200,
      height:20,
      alignItems:'center', 
      justifyContent:'center',  
    }
})