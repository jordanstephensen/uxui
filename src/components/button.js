import PropTypes from "prop-types"
import React from "react"

import './button.scss'

const Button = ({ link, type, children }) => (
  <a className="button__text" href={link}>
    <span className="button" href={link}>
        {children}
  </span>
</a>
)

Button.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.string,
  }  

export default Button
