import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '../Reducers/rootReducer';
import { thunk } from 'redux-thunk';

const middlewares = [thunk];

// Create Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

// this part composeWithDevTools() is extention for debugging the redux code ,
// then when publish the website i will removed this part composeWithDevTools() from code.