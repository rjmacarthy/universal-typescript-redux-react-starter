import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

const create = (isClient: boolean, initialState: any = {}) : Redux.Store => {
	if (!isClient) {
		return createStore(rootReducer, initialState);
	} else {
		return createStore(rootReducer, window.__INITIAL_STATE__);
	}
};

export default create;