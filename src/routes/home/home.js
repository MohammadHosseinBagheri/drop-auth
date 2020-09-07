import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderContent from '../../components/home/HeaderContent';
import HomeContent from '../../components/home/HomeContent';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderContent />
      <HomeContent navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
});
