import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
const ForgetPasswordButton = () => {
  return (
    <View style={styles.container}>
      <Button transparent style={styles.button}>
        <Text style={styles.text}>Forgot password ?</Text>
      </Button>
    </View>
  );
};

export default ForgetPasswordButton;

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
  button: {alignSelf: 'flex-end'},
  text:{color:'#757575'}
});
