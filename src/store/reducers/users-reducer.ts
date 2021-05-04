import { Action, handleActions } from "redux-actions";
import * as types from '../types';

export interface IUserState {
  users: any[] | null,
  user: any | null,
  loading: boolean,
  error: string
}

const initialState: IUserState = {
  users: [],
  user: {},
  loading: false,
  error: ''
}

export const usersReducer = handleActions<IUserState, any>(
  {
    [types.FETCH_ALL_USERS_REQUEST]: (state: any, action: Action<any>) => ({
      ...state,
      loading: true,
    }),
    [types.FETCH_ALL_USERS_SUCCESS]: (state: any, action: Action<any>) => ({
      ...state,
      loading: false,
      users: action.payload
    }),
    [types.FETCH_ALL_USERS_FAILURE]: (state: any, action: Action<any>) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  },
  initialState
)









