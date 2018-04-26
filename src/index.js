import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux'

import HeaderNav from './components/header/HeaderNav';
import PropertyList from './containers/properties/ListContainer';
import PropertyNew from './containers/properties/NewContainer';
import Dashboard from './containers/dashboard/DashboardContainer';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middleware = [sagaMiddleware, routeMiddleware];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <HeaderNav />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/properties" component={PropertyList}/>
        <Route path="/properties/new" component={PropertyNew}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)