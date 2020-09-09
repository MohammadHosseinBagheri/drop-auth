import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HeaderContent = (props) => {
  const {first_name, last_name, avatar} = props.information;
  console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          resizeMode={'stretch'}
          source={{uri: avatar}}
        />
      </View>
      <View style={{marginBottom: 15}}>
        <Text style={styles.name}>
          {first_name + ' '}
          {last_name}{' '}
        </Text>
        <Text style={styles.title}>Design UI/UX</Text>
      </View>
    </View>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 12, textAlign: 'center'},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  img: {borderRadius: 1000, width: '60%', height: '60%'},
});
