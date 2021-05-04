import { AnyAction } from "redux";
import { call, put, takeLatest } from 'redux-saga/effects';

import getAllUsers from '../../api/services/users';
import * as types from '../types/';

function* fetchUsers(action: AnyAction) {
  try {
    const { users } = yield call(getAllUsers);
    yield put({ type: types.FETCH_ALL_USERS_SUCCESS, users: users});
  } catch (error) {
    yield put({type: types.FETCH_ALL_USERS_FAILURE, error: error.message})
  }
}

export default function* userSaga() {
  yield takeLatest(types.FETCH_ALL_USERS_REQUEST, fetchUsers);
}

/*export default function* Saga() {
  yield takeLatest(types.FETCH_ALL_USERS_REQUEST, fetchUsers)
}*/
