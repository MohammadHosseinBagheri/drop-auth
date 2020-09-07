import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {authUser} from '../../redux/user/action/user.action';
const SignoutButton = (props) => {
  const {signout, navigation} = props;

  const signoutProccess = () => {
    signout();
    navigation.replace('login');
  };

  return (
    <TouchableOpacity onPress={() => signoutProccess()} style={styles.content}>
      <Icon name="log-in-outline" />
      <Text style={styles.text}>Sign out</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(authUser('')),
  };
};

export default connect(null, mapDispatchToProps)(SignoutButton);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {marginHorizontal: 5, fontSize: 15},
});
