import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTitle = () => {
  return (
    <View style={styles.logo}>
      <Text style={{textAlign: 'center'}}>jatus</Text>
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
});
