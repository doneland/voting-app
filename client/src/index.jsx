import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import {VotingContainer} from './components/Voting';
import App from './components/App';
import {ResultsContainer} from './components/Results';


const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', (state) => {
  store.dispatch({
    type: 'SET_STATE',
    state
  });
});

const routes = (
  <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
  </Route>
);


ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('app')
);
