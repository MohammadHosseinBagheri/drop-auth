import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderContent from '../../components/home/HeaderContent';
import HomeContent from '../../components/home/HomeContent';
import {connect} from 'react-redux';

const Home = (props) => {
  const [information, setInformation] = useState('');
  const {user} = props;

  const fetchData = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const responseJson = await response.json();
    console.log(responseJson);
    const data = await responseJson.data;
    var informationUser = data.find((item) => item.email == user.email);
    console.log(user, informationUser);
    if (!informationUser) {
      response = await fetch('https://reqres.in/api/users?page=2');
      responseJson = await response.json();
      console.log(responseJson);
      data = await responseJson.data;
      informationUser = data.find((item) => item.email == user.email);
      setInformation(informationUser);
    }
     setInformation(informationUser);
  };
  useEffect(() => {
    fetchData();
  }, [information]);
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderContent information={information} />
      <HomeContent navigation={navigation} />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
});
