import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results';


const routes = (
  <Route component={App}>
    <Route path="/results" component={Results} />
    <Route path="/" component={Voting} />
  </Route>
);


ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);
