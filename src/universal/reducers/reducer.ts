"use strict";

import { assign } from 'lodash';

let initialState: any = {};

const reducer: Redux.Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ACTION':
			return assign(state, state);
		default:
			return state;
	}
}

export default reducer;