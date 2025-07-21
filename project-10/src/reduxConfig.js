// import { createStore } from 'redux';
// import { rootReducer } from './Services/reducers';

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./Services/reducers";
import { thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
 composeEnhancers(applyMiddleware(thunk))
);