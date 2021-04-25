import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import './index.scss'

const CustomTabs = () => (
  <div>
    <Nav tabs>
      <NavItem className="nav-item">
        <NavLink to="/placements">Placements</NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink to="/families">Families</NavLink>
      </NavItem>
    </Nav>
  </div>
)

export default CustomTabs
