import React from "react";
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader,CDBSidebarMenu, CDBSidebarMenuItem } from "../../../node_modules/cdbreact/dist/index";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h3 className="text-decoration-none" style={{ color: 'inherit' }}>
            Portfolio
          </h3>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

