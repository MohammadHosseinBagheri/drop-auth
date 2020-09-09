import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Item, Icon, Button} from 'native-base';
import {connect} from 'react-redux';
import {authUser} from '../../redux/user/action/user.action';
import CustomInput from '../inputs/CustomInput';
import RegisterButton from './RegisterButton';
import SigninButton from './SigninButton';

const {height} = Dimensions.get('window');

const LoginContent = (props) => {
  const {alertOpen, userLogin, navigation} = props;

  const [iName, setIName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [secure, setSecure] = useState(true);

  const handleChange = (text, name) => {
    if (name == 'name') {
      setIName(text);
      return;
    }
    if (name == 'phone') {
      setPhone(text);
      return;
    }
    if (name == 'password') {
      setPassword(text);
      return;
    }
    if (name == 'confirm') {
      setConfirm(text);
      return;
    }
    setEmail(text);
    return;
  };

  //fetching data to server
  const fetchLoginData = async () => {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  };

  //auth data
  const loginPress = async () => {
    if (
      iName == '' ||
      phone == '' ||
      confirm == '' ||
      email == '' ||
      password == ''
    ) {
      alertOpen('Check the inputs');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alertOpen('Email format is invalid');
      return;
    }
    if (password.length < 8) {
      alertOpen('Minimum length of password is 8');
      return;
    }
    if (confirm != password) {
      alertOpen('Check password');
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
    <ScrollView style={styles.inputsContainer}>
      <Item style={{marginBottom: 13}}>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'person-outline'}
          name={'name'}
          placeholder={'Name'}
        />
      </Item>
      <Item style={{marginBottom: 13}}>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'call'}
          name={'phone'}
          placeholder={'Phone'}
        />
      </Item>
      <Item style={{marginBottom: 13}}>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'lock-closed-outline'}
          name={'password'}
          placeholder={'Password'}
        />
        <TouchableOpacity
          style={{zIndex: 20}}
          onPress={() => setSecure(!secure)}>
          <Icon name="eye" style={styles.icon} />
        </TouchableOpacity>
      </Item>
      <Item style={{marginBottom: 13}}>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'lock-closed-outline'}
          name={'confirm'}
          placeholder={'Confirm Password'}
        />
        <TouchableOpacity
          style={{zIndex: 20}}
          onPress={() => setSecure(!secure)}>
          <Icon name="eye" style={styles.icon} />
        </TouchableOpacity>
      </Item>
      <Item>
        <CustomInput
          secure={secure}
          handleChange={handleChange}
          iconName={'mail'}
          name={'email'}
          placeholder={'Email'}
        />
      </Item>
      <RegisterButton onPress={loginPress} />
      <SigninButton navigation={navigation} />
    </ScrollView>
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
