import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';

const LoginButton = (props) => {
  const {onPress} = props;
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#64B5F6', '#1976D2']}
      style={styles.linearGradient}>
      <Button transparent onPress={() => onPress()}  style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </Button>
    </LinearGradient>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {color: '#fff', fontSize: 18, fontWeight: '200'},
  linearGradient: {
    flex: 1,
    paddingVertical: 8,
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
