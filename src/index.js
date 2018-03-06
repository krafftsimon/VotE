import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';

import './index.css';
import reducers from './reducers';
import Home from './components/home/home';
import Affixes from './components/affixes/affixes';
import Dungeons from './components/dungeons/dungeons';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/dungeons" component={Dungeons} render={() => window.scrollTo(0, 0)} />
        <Route path="/affixes" component={Affixes} render={() => window.scrollTo(0, 0)} />
        <Route path="/" component={Home} render={() => window.scrollTo(0, 0)} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
