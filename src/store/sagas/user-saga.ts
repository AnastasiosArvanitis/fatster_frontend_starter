import { AnyAction } from "redux";
import { call, put, takeLatest } from 'redux-saga/effects';

import getAllUsers from '../../api/services/users';
import * as types from '../types/';
import { fetchAllUsersSuccess, fetchAllUsersFailure } from "../actions";

function* fetchUsers(action: AnyAction) {
  try {
    // @ts-ignore
    const response: any = yield call(getAllUsers);
    yield put(fetchAllUsersSuccess(response));
  } catch (error) {
    yield put(fetchAllUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(types.FETCH_ALL_USERS_REQUEST, fetchUsers);
}

