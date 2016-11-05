import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../Common/Layout/Header';
import Sidebar from '../Common/Layout/Sidebar';
import SidebarSection from '../Common/Layout/SidebarSection';
import SidebarItem from '../Common/Layout/SidebarItem';
import SidebarMenu from '../Common/Layout/SidebarMenu';
import SidebarSubMenu from '../Common/Layout/SidebarSubMenu';
import Footer from '../Common/Layout/Footer';

class App extends Component {

  renderHeader() {
    return (
      <Header />
    );
  }

  renderSidebar() {
    return (
      <Sidebar
        avatar="/efp.jpg"
        user_name="Edgar Felipe Fuentes Perea"
        user_role="Administrador" >
        <SidebarSection
          title="Principal" />
          <SidebarItem
            link="/"
            title="Inicio"
            icon="fa fa-dashboard" />
          <SidebarMenu
            title="Instituciones"
            icon="fa fa-bank">
            <SidebarSubMenu
              route="/cliente_mgmnt"
              title="Administrar" />
          </SidebarMenu>
          <SidebarSection
            title="Configuración" />
            <SidebarMenu
              title="Encuestas"
              icon="fa fa-check-square-o">
              <SidebarSubMenu
                route="/roles"
                title="Administrar" />
            </SidebarMenu>
            <SidebarMenu
              title="Seguridad"
              icon="fa fa-lock">
              <SidebarSubMenu
                route="/roles"
                title="Administrar Roles" />
            </SidebarMenu>
      </Sidebar>
    );
  }

  renderContent() {
    const animationName = 'rag-fadeIn';

    return (
      <ReactCSSTransitionGroup
        component="section"
        transitionName={animationName}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }

  renderFooter() {
    return(
      <Footer
        company_name="efuentesp@gmail.com"
        initial_year="2016" />
    );
  }

  render() {
    return(
      <div className="wrapper">
        { this.renderHeader() }
        { this.renderSidebar() }
        { this.renderContent() }
        { this.renderFooter() }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
