import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, Input} from 'native-base';
const CustomInput = ({name, placeholder,}) => {
  return (
    <>
      <Icon name={name} style={styles.icon} />
      <Input placeholder={placeholder} />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  icon: {color: '#7986CB'},
});
