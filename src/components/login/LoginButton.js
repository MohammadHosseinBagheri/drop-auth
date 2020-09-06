import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from 'native-base';
const LoginButton = () => {
  return (
    <Button full style={styles.button}>
      <Text style={styles.text}>Log in</Text>
    </Button>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {borderRadius: 10, backgroundColor: '#1976D2'},
  text: {color: '#fff', fontSize: 18, fontWeight: '200'},
});
