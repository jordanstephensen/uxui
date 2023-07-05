import { Link } from "gatsby"
import React from "react"

import icon from "../../images/uxui-icon.svg"

import './header.scss'

const HeaderSub = () => {
    return (
    <div className="header--scrolled">
        <Link to="/">
          <img className="header__logo" src={icon} alt="UXUI"/>
        </Link>
        <div className="header__nav-links">
          {/* <Link activeClassName="header__nav-links--active" to="/">UX Resources</Link>
          <Link activeClassName="header__nav-links--active" to="/">UI Resources</Link> */}
          <Link activeClassName="header__nav-links--active" to="/about">About</Link>
        </div>
      </div>
    )
}

  export default HeaderSub
