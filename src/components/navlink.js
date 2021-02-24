import PropTypes from "prop-types"
import React from "react"

import './navlink.scss'

const NavLink = ({ label, link, active }) => (
        <div className="nav-link" >
          <a href={link} className="nav-link__text">{label}</a>
        </div> 
)

NavLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
}

export default NavLink
