import { Link } from "gatsby"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import icon from "../../images/uxui-icon.svg"
import github from "../../images/github.svg"

import './header.scss'

const HeaderSub = () => {
    return (
    <div className="header--scrolled">
        <AnchorLink to="/#top">
          <img className="header__logo" src={icon} alt="UXUI"/>
        </AnchorLink>
        <div className="header__nav-links">
          <AnchorLink activeClassName="header__nav-links--active" to="/#ux">UX Resources</AnchorLink>
          <AnchorLink activeClassName="header__nav-links--active" to="/#ui">UI Resources</AnchorLink>
          <Link activeClassName="header__nav-links--active" to="https://github.com/jordanstephensen/uxui" target="_blank">
            <img src={github} alt="Github source files"/>
          </Link>
        </div>
      </div>
    )
}

  export default HeaderSub
