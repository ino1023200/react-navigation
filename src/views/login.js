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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default login = ({navigation}) => {
  const [getPasswordVidsible, setPasswordVisible] = useState(false);
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../images/login.jpg')}
      resizeMode="stretch">
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          {/* phần email & password */}
          <View
            style={{
              width: '100%',
              height: '20%',
              marginTop: 0.3 * windowHeight,
              alignItems: 'center',
            }}>
            {/*Email */}
            <View
              style={{
                width: '70%',
                height: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white'}}>Email: </Text>
              <TextInput
                style={{
                  height: '100%',
                  width: '70%',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  textAlign: 'right',
                  fontSize: 16,
                }}></TextInput>
            </View>
            {/* =========================================password============================= */}
            <View
              style={{
                width: '70%',
                height: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{color: 'white'}}>password: </Text>
              <TextInput
                style={{
                  height: '100%',
                  width: '70%',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  textAlign: 'right',
                  paddingRight: 30,
                  fontSize: 16,
                }}
                secureTextEntry={
                  getPasswordVidsible ? false : true
                }></TextInput>
              <TouchableOpacity
                style={{
                  height: '100%',
                  aspectRatio: 1,
                  position: 'absolute',
                  right: 0,
                }}
                onPress={() => {
                  setPasswordVisible(!getPasswordVidsible);
                }}>
                {getPasswordVidsible ? (
                  <Image
                    source={require('../images/ic_openEye.png')}
                    style={{width: '100%', height: '100%'}}></Image>
                ) : (
                  <Image
                    source={require('../images/ic_closeEye.png')}
                    style={{width: '100%', height: '100%'}}></Image>
                )}
              </TouchableOpacity>
            </View>
          </View>
          {/* button login anh register */}
          <View
            style={{
              width: '100%',
              height: '20%',
              borderColor: 'white',
              marginTop: 0.15 * windowHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* đăng nhập */}
            <TouchableOpacity
              style={{
                width: '60%',
                height: '30%',
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'brown',
                borderRadius: 100,
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Đăng nhập</Text>
            </TouchableOpacity>
            {/* đăng ký */}
            <TouchableOpacity
              style={{
                width: '60%',
                height: '30%',
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'chocolate',
                borderRadius: 100,
                marginTop: 20,
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
