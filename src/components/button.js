import PropTypes from "prop-types"
import React from "react"

import './button.scss'

const Button = ({ link, type, children }) => (
  <span className="button" href={link}>
        <a className="button__text" href={link}>{children}</a>
  </span>
)

Button.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.string,
  }  

export default Button
