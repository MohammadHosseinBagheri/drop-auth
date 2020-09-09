import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HeaderTitle from '../../../components/login/HeaderTitle';
import LoginContent from '../../../components/login/LoginContent';
import AlertModal from '../../../components/alerts-modal/AlertModal';
import RegisterContent from '../../../components/register/RegisterContent';

const {height} = Dimensions.get('window');

const Register = (props) => {
  const {navigation} = props;

  const alertModal = useRef();

  const open = (text) => {
    alertModal.current.open(text, 'login');
  };
  return (
    <View style={styles.container}>
      <HeaderTitle />
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <KeyboardAvoidingView keyboardVerticalOffset={-100} behavior="padding">
          <RegisterContent alertOpen={open} navigation={navigation} />
        </KeyboardAvoidingView>
      </View>
      <AlertModal ref={alertModal} navigation={navigation} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  content: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: (height * 5) / 100,
    paddingHorizontal: 20,
  },
});
