import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./sagas";
import { usersReducer, IUserState } from "./reducers/users-reducer";

export interface IRootState {
  users: IUserState
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  users: usersReducer
});

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// WTF?
export const { dispatch } = store;

sagaMiddleware.run(rootSaga);
export default store;
