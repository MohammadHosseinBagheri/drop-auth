import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import ProfileContent from './ProfileContent';
import SignoutButton from './SignoutButton';

const HomeContent = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ProfileContent iconName={'settings'} title={'Settings'} />
      <ProfileContent iconName={'person'} title={'Profile'} />
      <ProfileContent iconName={'notifications'} title={'Notifications'} />
      <ProfileContent iconName={'mail'} title={'Message'} />
      <SignoutButton navigation={navigation} />
    </View>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '100%',
    elevation: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
