import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
const ProfileContent = (props) => {
  const {iconName, title} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconView}>
          <Icon style={styles.icon} name={iconName} />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Icon style={{color: '#CFD8DC'}} name="chevron-forward" />
    </TouchableOpacity>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  content: {flexDirection: 'row', alignItems: 'center'},
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    elevation: 2,
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  icon: {color: '#1565C0', fontSize: 21},
  text: {marginHorizontal: 10, fontSize: 16, fontWeight: '100'},
});
