import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAVtilQWgro5WYN6bMibr9K9tGCB5jRBSc',
      authDomain: 'manager-95733.firebaseapp.com',
      databaseURL: 'https://manager-95733.firebaseio.com',
      projectId: 'manager-95733',
      storageBucket: 'manager-95733.appspot.com',
      messagingSenderId: '20658172319'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
