import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Filter from "../components/filter"
import logo from "../images/uxui-logo.svg"

import './header.scss'

const Header = ({  }) => (
  <header>
      <Link to="/">
        <img id="header__logo" src={logo} alt="UXUI"/>
      </Link>
      <h4>&nbsp;Everything Open-Source.</h4>
    </header>
)


export default Header
