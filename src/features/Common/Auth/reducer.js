import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SESSION_SUCCESS
} from './actions';

const INITIAL_STATE = { authenticated: false, username: null, role: null, error: null };

export default function (state = INITIAL_STATE, action) {
  let i, roles;
  switch (action.type) {
    case LOGIN_SUCCESS:
      //console.log("LOGIN_SUCCESS");
      roles = action.payload.roles;
      i = roles.indexOf("user");
      if(i != -1) {
        roles.splice(i, 1);
      }
      return { ...state, authenticated: true, username: action.payload.user_id, role: roles.join(', '), error: null };

    case LOGIN_FAILURE:
      //console.log("LOGIN_FAILURE");
      return { ...state, authenticated: false, username: null, role: null, error: action.payload };

    case LOGOUT_SUCCESS:
      //console.log("LOGOUT_SUCCESS");
      return { ...state, authenticated: false, username: null, role: null, error: null };

    case SESSION_SUCCESS:
      console.log("SESSION_SUCCESS", action.payload.data);
      roles = action.payload.data.roles;
      i = roles.indexOf("user");
      if(i != -1) {
        roles.splice(i, 1);
      }
      return { ...state, authenticated: true, username: action.payload.data.user_id, role: roles.join(', '), error: null };
  }

  return state;
}
