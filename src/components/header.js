import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Filter from "../components/filter"
import logo from "../images/uxui-logo.svg"

import './header.scss'

const Header = ({  }) => (
  <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="UXUI"/>
      </Link>
      <h4>&nbsp;Everything Open-Source.</h4>
    </div>
)


export default Header
