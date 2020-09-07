import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/index';
import Config from './src/routes';
import logger from 'redux-logger';

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
