import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';

const SigninButton = (props) => {
  const {navigation} = props;
  const loginScreen = () => {
    navigation.replace('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Already have an account?</Text>
      <Button onPress={() => loginScreen()} transparent>
        <Text style={{color: '#1976D2'}}>Log in</Text>
      </Button>
    </View>
  );
};

export default SigninButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    marginHorizontal: 10,
  },
});
