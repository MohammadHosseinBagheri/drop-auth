import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import {Item, Icon, Button} from 'native-base';
import {connect} from 'react-redux';

import ForgetPasswordButton from './ForgetPasswordButton';
import LoginButton from './LoginButton';
import SignUpContent from './SignUpContent';
import MethodsButton from './MethodsButton';
import CustomInput from '../inputs/CustomInput';
import {authUser} from '../../redux/user/action/user.action';

const {height} = Dimensions.get('window');

const LoginContent = (props) => {
  const {alertOpen, userLogin, navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(false);

  const handleChange = (text, name) => {
    if (name == 'email') {
      setEmail(text);
      return;
    }
    setPassword(text);
    return;
  };

  //fetching data to server
  const fetchLoginData = async () => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  };

  //auth data
  const loginPress = async () => {
    if (email == '' || password == '') {
      alertOpen('Check the inputs');
      return;
    }
    const data = await fetchLoginData();
    const error = await data.error;
    const token = await data.token;

    //store in redux state
    if (token) {
      await userLogin(token);
      await alertOpen('success');
      return;
    }

    if (error) {
      alertOpen(error);
      return;
    }
  };

  return (
    <View style={styles.inputsContainer}>
      <Item>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'call'}
          name={'email'}
          placeholder={'email'}
        />
      </Item>
      <Item style={{marginTop: 25}}>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'lock-closed'}
          name="password"
          placeholder="Password"
        />
        <TouchableOpacity
          style={{zIndex: 20}}
          onPress={() => setSecure(!secure)}>
          <Icon name="eye" style={styles.icon} />
        </TouchableOpacity>
      </Item>
      <ForgetPasswordButton />
      <LoginButton onPress={loginPress} />
      <SignUpContent navigation={navigation} />
      <View style={styles.loginMethodsContent}>
        <MethodsButton name="google" />
        <MethodsButton />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch(authUser(token)),
  };
};

export default connect(null, mapDispatchToProps)(LoginContent);

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: (height * 5) / 100,
  },
  loginMethodsContent: {flexDirection: 'row', justifyContent: 'center'},
  icon: {color: '#7986CB'},
});
