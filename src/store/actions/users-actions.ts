import * as types from '../types';
import { createAction } from 'redux-actions';

export const fetchAllUsersRequest = createAction(types.FETCH_ALL_USERS_REQUEST);
export const fetchAllUsersSuccess = createAction(types.FETCH_ALL_USERS_SUCCESS);
export const fetchAllUsersFailure = createAction(types.FETCH_ALL_USERS_FAILURE);
