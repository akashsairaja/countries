import request from 'axios';

import { requestUrl } from '../utils';
import actionTypes from './actionTypes';

export const getCountiesDetails = () => dispatch => {
	request.get(requestUrl).then(({ data }) => {
		dispatch({
			type: actionTypes.GET_COUNTRIES_SUCCESS,
			payload: data,
		});
	}).catch(err => {
		console.error(err);
	});
};
