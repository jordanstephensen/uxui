import PropTypes from "prop-types"
import React from "react"

import './pageHeader.scss'

const PageHeader = ({ icon, title, children }) => (
  <div className="page-header">
    <img className="page-header__icon" src={icon} alt="UXUI"/>
    <h1 className="page-header__title">{title}</h1>
  </div>
)

PageHeader.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
}

export default PageHeader
