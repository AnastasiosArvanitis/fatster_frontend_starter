import { AnyAction } from "redux";
import { call, put, takeLatest } from 'redux-saga/effects';

import { getAllUsers, getUserById } from '../../api/services/users';
import * as types from '../types/';
import {
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  fetchUserByIdSuccess,
  fetchUserByIdFailure
} from "../actions";

function* fetchUsers(action: AnyAction) {
  try {
    // @ts-ignore
    const response: any = yield call(getAllUsers);
    yield put(fetchAllUsersSuccess(response));
  } catch (error) {
    yield put(fetchAllUsersFailure(error.message));
  }
}

function* fetchUserById(action: AnyAction) {
  try {
    // @ts-ignore
    const response: any = yield call(getUserById);
    yield put(fetchUserByIdSuccess(response));
  } catch (error) {
    yield put(fetchUserByIdFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(types.FETCH_ALL_USERS_REQUEST, fetchUsers);
  yield takeLatest(types.FETCH_USER_BY_ID_REQUEST, fetchUserById);
}

