import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Item, Icon} from 'native-base';

import ForgetPasswordButton from './ForgetPasswordButton';
import LoginButton from './LoginButton';
import SignUpContent from './SignUpContent';
import MethodsButton from './MethodsButton';
import CustomInput from '../inputs/CustomInput';

const {height} = Dimensions.get('window');

const LoginContent = () => {
  return (
    <View style={styles.inputsContainer}>
      <Item>
        <CustomInput iconName={'call'} name={'phone'} placeholder={'Phone'} />
      </Item>
      <Item style={{marginTop: 25}}>
        <CustomInput
          iconName={'lock-closed'}
          name="password"
          placeholder="Password"
        />
        <Icon name="eye" style={styles.icon} />
      </Item>
      <ForgetPasswordButton />
      <LoginButton />
      <SignUpContent />
      <View style={styles.loginMethodsContent}>
        <MethodsButton name="google" />
        <MethodsButton />
      </View>
    </View>
  );
};

export default LoginContent;

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: (height * 5) / 100,
  },
  loginMethodsContent: {flexDirection: 'row', justifyContent: 'center'},
  icon: {color: '#7986CB'},
});
