import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/mainReducer';

// connect store to reducer
let store = createStore(reducer,applyMiddleware());

export default store;