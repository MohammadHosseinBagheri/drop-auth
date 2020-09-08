import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from 'native-base';
const CustomInput = (props) => {
  const {name, placeholder, iconName, handleChange, secure} = props;
  return (
    <>
      <Icon name={iconName} style={styles.icon} />
      <Input
        onChangeText={(text) => handleChange(text, name)}
        secureTextEntry={
          (name == 'email' ? false : true) &&
          (name != 'email' && secure ? true : false)
        }
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
