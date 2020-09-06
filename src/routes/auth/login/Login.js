import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import HeaderTitle from '../../../components/login/HeaderTitle';
import LoginContent from '../../../components/login/LoginContent';

const {height} = Dimensions.get('window');

const Login = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle />
      <View style={styles.content}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Welcome</Text>
        <LoginContent />
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
