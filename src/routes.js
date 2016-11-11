import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './features/App/App';
import HomePage from './features/Home/Home';
import RequireAuth from './features/Common/Auth/require_auth';
import RequireRole from './features/Common/Auth/require_role';
import LoginPage from './features/Common/Auth/Login';
import LogoutPage from './features/Common/Auth/Logout';
import ForbiddenPage from './features/Common/Auth/Forbidden';
import NotFoundPage from './features/Common/Pages/NotFound';

import ClienteManagement from './features/Entities/Cliente/ClienteManagement';
import ClienteCreate from './features/Entities/Cliente/ClienteCreate';
import ClienteEdit from './features/Entities/Cliente/ClienteEdit';
import ClienteDelete from './features/Entities/Cliente/ClienteDelete';

import OrdenManagement from './features/Entities/Orden/OrdenManagement';
import OrdenCreate from './features/Entities/Orden/OrdenCreate';
import OrdenEdit from './features/Entities/Orden/OrdenEdit';
import OrdenDelete from './features/Entities/Orden/OrdenDelete';

// import ProductoManagement from './features/Entities/Producto/ProductoManagement';
// import ProductoCreate from './features/Entities/Producto/ProductoCreate';
// import ProductoEdit from './features/Entities/Producto/ProductoEdit';
// import ProductoDelete from './features/Entities/Producto/ProductoDelete';

import RoleManagement from './features/Common/Security/Role/RoleManagement';
import RoleEdit from './features/Common/Security/Role/RoleEdit';
import RoleDelete from './features/Common/Security/Role/RoleDelete';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(HomePage)}/>

      <Route path="cliente_mgmnt" component={RequireAuth(ClienteManagement)} />
      <Route path="cliente" component={RequireRole('admin', ClienteCreate)} />
      <Route path="cliente/edit/:id" component={RequireRole('student', ClienteEdit)} />
      <Route path="cliente/delete/:id" component={ClienteDelete} />

      <Route path="orden_mgmnt" component={OrdenManagement} />
      <Route path="orden" component={OrdenCreate} />
      <Route path="orden/:id" component={OrdenCreate} />
      <Route path="orden/edit/:id" component={OrdenEdit} />
      <Route path="orden/delete/:id" component={OrdenDelete} />

      <Route path="roles" component={RoleManagement} />
      <Route path="roles/edit/:id" component={RoleEdit} />
      <Route path="roles/delete/:id" component={RoleDelete} />
    </Route>

    <Route path="/login" component={LoginPage}/>
    <Route path="/logout" component={LogoutPage}/>
    <Route path="/forbidden" component={ForbiddenPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

//---- Mover junto a las demás rutas
// <Route path="producto_mgmnt" component={ProductoManagement} />
// <Route path="producto" component={ProductoCreate} />
// <Route path="producto/edit/:id" component={ProductoEdit} />
// <Route path="producto/delete/:id" component={ProductoDelete} />
