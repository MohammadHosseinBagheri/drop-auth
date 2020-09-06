import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Button} from 'native-base';

const MethodsButton = ({name}) => {
  return (
    <Button style={styles.container}>
      <Image
        style={styles.img}
        source={
          name == 'google'
            ? require('../../assets/img/icons8-google-48.png')
            : require('../../assets/img/icons8-facebook-f-50.png')
        }
      />
    </Button>
  );
};

export default MethodsButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    padding: 5,
    height: 60,
    width: 60,
    justifyContent: 'center',
    borderRadius: 1000,
    backgroundColor: '#ECEFF1',
    elevation: 0,
  },
  img: {width: 35, height: 35},
});
