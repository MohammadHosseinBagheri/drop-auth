import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
const SignUpContent = (props) => {
  const {navigation} = props;

  const registerScreen = () => {
    navigation.replace('register');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Don't have an account?</Text>
      <Button
        transparent
        style={{marginHorizontal: 5}}
        onPress={() => registerScreen()}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Button>
    </View>
  );
};

export default SignUpContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {color: '#757575'},
  buttonText: {color: '#1976D2'},
});
