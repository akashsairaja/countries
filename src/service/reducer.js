import actionTypes from './actionTypes';

const initialState = {
	totalCountries: [],
};


const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_COUNTRIES_SUCCESS:
			return {
				...state,
				totalCountries: action.payload,
			};
		default:
			return state;
	}
};

export default appReducer;
