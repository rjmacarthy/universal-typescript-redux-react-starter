import reducer from './reducer';
import { combineReducers } from 'redux';

const rootReducer : Redux.Reducer = combineReducers({
	reducer : reducer
});
export { rootReducer };