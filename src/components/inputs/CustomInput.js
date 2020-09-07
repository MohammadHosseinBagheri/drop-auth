import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from 'native-base';
const CustomInput = ({name, placeholder, iconName, handleChange}) => {
  return (
    <>
      <Icon name={iconName} style={styles.icon} />
      <Input
        onChangeText={(text) => handleChange(text, name)}
        secureTextEntry={name == 'email' ? false : true}
        keyboardType={name == 'email' ? 'email-address' : 'default'}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  icon: {color: '#7986CB'},
});
