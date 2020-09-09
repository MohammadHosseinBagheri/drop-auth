import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const RegisterButton = (props) => {
  const {onPress} = props;
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      colors={['#64B5F6', '#1976D2']}
      style={styles.linearGradient}>
      <Button onPress={() => onPress()} transparent style={styles.button}>
        <Text style={styles.text}>Sign Up</Text>
      </Button>
    </LinearGradient>
  );
};

export default RegisterButton;

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
    paddingVertical: 4,
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
