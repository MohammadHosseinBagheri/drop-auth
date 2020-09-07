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

const {height} = Dimensions.get('window');
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Login = (props) => {
  const {navigation} = props;

  const alertModal = useRef();

  const open = (text) => {
    alertModal.current.open(text);
  };
  return (
    <View style={styles.container}>
      <HeaderTitle />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior="padding">
          <LoginContent alertOpen={open} navigation={navigation} />
        </KeyboardAvoidingView>
      </View>
      <AlertModal ref={alertModal} navigation={navigation} />
    </View>
  );
};

export default Login;

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
