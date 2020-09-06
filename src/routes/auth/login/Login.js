import React from 'react';
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

const {height} = Dimensions.get('window');
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Login = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle />
      <View style={styles.content}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Welcome</Text>
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior="padding">
          <LoginContent />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },

  content: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: (height * 5) / 100,
    paddingHorizontal: 20,
  },
});
