import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = props => (
  <NavLink exact {...props} activeStyle={{ background: 'lightblue' }} />
);

export default NavbarLink;
