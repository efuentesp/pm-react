import axios from 'axios';
import { browserHistory } from 'react-router';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SESSION_SUCCESS = 'SESSION_SUCCESS';

const ROOT_URL = 'http://localhost:7777';

/**
 ** Authentication actions
 **/

export function LoginSuccess(payload) {
 return { type: LOGIN_SUCCESS, payload };
}

export function LoginFailure(err) {
 return { type: LOGIN_FAILURE, payload: err };
}

export function LogoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function SessionSuccess(payload) {
  return { type: SESSION_SUCCESS, payload };
}

export function loginUser(username, password) {
  let url = `${ROOT_URL}/auth/login`;

  const request = axios({
    method: 'post',
    url: url,
    data: {username, password},
    headers: []
  });

  return (dispatch) => {
    request
      .then((res) => {
        dispatch(LoginSuccess(res.data));
        localStorage.setItem('token', `${res.data.token}:${res.data.password}`);
        browserHistory.push("/");
      })
      .catch(() => {
        dispatch(LoginFailure("Wrong Username or Password."));
      });
  };
}

export function logoutUser() {
  let url = `${ROOT_URL}/auth/logout`;
  let token = localStorage.getItem('token');

  const request = axios({
    method: 'post',
    url: url,
    headers: { 'Authorization': 'Bearer ' + token }
  });

  return (dispatch) => {
    request
      .then((res) => {
        dispatch(LogoutSuccess(res));
        localStorage.removeItem('token');
      })
      .catch(() => {
        console.error("Logout Error!!");
        localStorage.removeItem('token');
      });
  };
}

export function getSession() {
  let url = `${ROOT_URL}/auth/session`;
  let token = localStorage.getItem('token');

  const request = axios({
    method: 'get',
    url: url,
    headers: { 'Authorization': 'Bearer ' + token }
  });

  return (dispatch) => {
    request
      .then((res) => {
        dispatch(SessionSuccess(res));
      })
      .catch((err) => {
        console.error("Session Error!!", err);
      });
  };
}
