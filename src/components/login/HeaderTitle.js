import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTitle = () => {
  return (
    <View style={styles.logo}>
      <Text
        style={styles.text}>
        jatus
      </Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  logo: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'uppercase',
    color: '#1976D2',
    fontWeight: 'bold',
  }
});
