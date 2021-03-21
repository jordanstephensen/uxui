import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './navlink.scss'


const NavLink = ({ label, link, active }) => (
        <Link to={link} className="nav-link" activeClassName="nav-link--active">
          <p>{label}</p>
        </Link> 
)

NavLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
}

export default NavLink
