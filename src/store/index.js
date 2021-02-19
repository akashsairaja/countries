import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../service/reducer';


const reducer = combineReducers({
	appReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;

