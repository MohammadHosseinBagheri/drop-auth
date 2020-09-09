import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from 'native-base';
const CustomInput = (props) => {
  const {name, placeholder, iconName, handleChange, secure} = props;
  return (
    <>
      <Icon name={iconName} style={styles.icon} />
      <Input
        maxLength={name != 'email' ? 32 : name == 'phone' ? 11 : 70}
        style={{fontSize: 13}}
        onChangeText={(text) => handleChange(text, name)}
        secureTextEntry={
          (name == 'password' || name == 'confirm') && secure ? true : false
        }
        keyboardType={name == 'email' ? 'email-address' : 'default'}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  icon: {color: '#1976D2'},
});
