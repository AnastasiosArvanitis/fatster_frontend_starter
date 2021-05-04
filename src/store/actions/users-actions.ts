import * as types from '../types';
import { createAction } from 'redux-actions';

export const fetchAllUsersRequest = createAction(types.FETCH_ALL_USERS_REQUEST);
export const fetchAllUsersSuccess = createAction(types.FETCH_ALL_USERS_SUCCESS);
export const fetchAllUsersFailure = createAction(types.FETCH_ALL_USERS_FAILURE);

export const fetchUserByIdRequest = createAction(types.FETCH_USER_BY_ID_REQUEST);
export const fetchUserByIdSuccess = createAction(types.FETCH_USER_BY_ID_SUCCESS);
export const fetchUserByIdFailure = createAction(types.FETCH_USER_BY_ID_FAILURE);
