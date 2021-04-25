import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import NavigationActions from 'store/actions/NavigationActions'

const CustomTabs = () => {
  const dispatch = useDispatch()
  const {
    navigation: { isPlacement, isFamily, isCurrentRoute },
  } = useSelector((state) => state)
  console.log('isCurrentRoute', isCurrentRoute)
  return (
    <div>
      <Nav tabs>
        <NavItem
          className="nav-item"
          onClick={() => {
            dispatch(NavigationActions.resetState())
          }}
        >
          <NavLink to="/placements" className={isPlacement && 'active'}>
            Placements
          </NavLink>
        </NavItem>
        <NavItem
          className="nav-item"
          onClick={() => {
            dispatch(NavigationActions.resetState())
          }}
        >
          <NavLink to="/families" className={isFamily && 'active'}>
            Families
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default CustomTabs
