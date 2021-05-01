import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/Header'
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export default class ReadStoryScreen extends React.Component {
    render(){
  return (
    <SafeAreaProvider>
    <View>
      <MyHeader
      title='Read Story'
      />
      <View style={style.ViewStyles}>
    <Text style={style.styles}>
    Read Story
    </Text>
    </View>
    </View>
    </SafeAreaProvider>
  );
}
}
const style=StyleSheet.create({
  styles:{
    width:100,
    allignItem:'center',
    justifyContent:'center'
  },
  ViewStyles:{
    marginLeft:700,
    allignItem:'center',
    justifyContent:'center'
  }
})