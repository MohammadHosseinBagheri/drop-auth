import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from 'native-base';
const CustomInput = ({name, placeholder, iconName}) => {
  return (
    <>
      <Icon name={iconName} style={styles.icon} />
      <Input
        secureTextEntry={name == 'phone' ? false : true}
        keyboardType={name == 'phone' ? 'numeric' : 'default'}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  icon: {color: '#7986CB'},
});
