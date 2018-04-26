import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
const HeaderNav = () =>
  <div>
    <Nav>
      <NavItem>
        <NavLink href="/">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/properties">Properties</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/properties/new">New Property</NavLink>
      </NavItem>
    </Nav>
     <hr />
  </div>

export default HeaderNav