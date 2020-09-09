import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modalbox';

export class AlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const {navigation} = this.props;
    this.open = async (text, nextRoute) => {
      this.setState({text: text});
      await this.refs.alertModal.open();
      setTimeout(async () => {
        await this.close();
        if (this.state.text == 'success') {
          if (nextRoute == 'home') this.homeScreen();
          else {
            this.loginScreen();
          }
        }
      }, 2000);
    };
    this.close = () => this.refs.alertModal.close();
    this.homeScreen = () => navigation.replace('home');
    this.loginScreen = () => navigation.replace('login');
    return (
      <Modal
        ref={'alertModal'}
        position={'bottom'}
        backdrop={false}
        style={[
          styles.modal,
          {
            backgroundColor:
              this.state.text == 'success' ? '#00E676' : '#d50000',
          },
        ]}>
        <View style={styles.content}>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </Modal>
    );
  }
}

export default AlertModal;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
  },
  modal: {
    height: 60,
    //   position: 'absolute',
    //   botton:50,
    borderRadius: 15,
    width: '95%',
    marginBottom: 100,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'left',
    marginHorizontal: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
