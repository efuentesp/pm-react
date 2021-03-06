import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import AuthReducer from '../features/Common/Auth/reducer';

import ClienteReducer from '../features/Entities/Cliente/reducer';
import OrdenReducer from '../features/Entities/Orden/reducer';

import RoleReducer from '../features/Common/Security/Role/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: AuthReducer,
  form: formReducer,
  toastr: toastrReducer,
  cliente: ClienteReducer,
  orden: OrdenReducer,
  roles: RoleReducer
});

export default rootReducer;
