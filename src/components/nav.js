import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Filter from "../components/filter"
import NavLink from "../components/navlink"

import './nav.scss'

const Nav = () => (

    <div className="nav">
        <NavLink label="All" link="/"/>
        <NavLink label="UX" link="/category/ux"/>
        <NavLink label="Accessibility" link="/category/accessibility"/>
        <NavLink label="UI Design" link="/category/ui-design"/>
        <NavLink label="Design Systems" link="/category/design-systems"/>
        <NavLink label="Icons" link="/category/icons"/>
        <NavLink label="Color" link="/category/color"/>
        <NavLink label="Fonts" link="/category/fonts"/>
        <NavLink label="Code" link="/category/code"/>
        <NavLink label="Communities" link="/category/communities"/>
    </div>
)

export default Nav
