import React from 'react';
import {StyleSheet, I18nManager, AsyncStorage} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/index';
import Config from './src/routes';
import logger from 'redux-logger';
import RNRestart from 'react-native-restart';

AsyncStorage.setItem('lang', 'ar', () => {
  AsyncStorage.getItem('lang', (value) => {
    if (value != null) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  });
});

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const App = () => {
  return (
    <Provider store={store}>
      <Config />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
