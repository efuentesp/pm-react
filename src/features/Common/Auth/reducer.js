import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from './actions';

const INITIAL_STATE = { authenticated: false, error: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      //console.log("LOGIN_SUCCESS");
      return { ...state, authenticated: true, error: null };

    case LOGIN_FAILURE:
      //console.log("LOGIN_FAILURE");
      return { ...state, authenticated: false, error: action.payload };

    case LOGOUT_SUCCESS:
      //console.log("LOGOUT_SUCCESS");
      return { ...state, authenticated: false, error: null };
  }

  return state;
}
