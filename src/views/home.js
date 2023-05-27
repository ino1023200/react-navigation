import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';

import {Input} from 'react-native-element';
export default Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: '100%',
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{}}>back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: '100%',
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Text style={{}}>Setting</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'brown',
          marginTop: 10,
          borderWidth: 2,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 50,
          }}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
};
