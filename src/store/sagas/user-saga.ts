import { AnyAction } from "redux";
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import getAllUsers from '../../api/services/users';
import * as types from '../types/';

function* fetchUsers(action: AnyAction) {
  try {
    const { users } = yield call(getAllUsers);
    console.log(`user saga fetchUsers users: ${users}`);
    yield put({ type: types.FETCH_ALL_USERS_SUCCESS, users: action.payload});
  } catch (error) {
    yield put({type: types.FETCH_ALL_USERS_FAILURE, error: action.payload})
  }
}

export default function* userSaga() {
  yield takeEvery(types.FETCH_ALL_USERS_REQUEST, fetchUsers);
}

/*export default function* Saga() {
  yield takeLatest(types.FETCH_ALL_USERS_REQUEST, fetchUsers)
}*/
