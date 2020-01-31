import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
	console.log("enter in store")
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
