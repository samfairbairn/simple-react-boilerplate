import { createStore } from 'redux';
import rootReducer from '../reducers/root';

export default (initialState = {}) => {

	const store = createStore(rootReducer, initialState);
	return store;

};