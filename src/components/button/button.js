import PropTypes from "prop-types"
import React from "react"

import './button.scss'

const Button = ({ link, target, children }) => (
  <a className="button__text" href={link} target={target}>
    <span className="button">
        {children}
  </span>
</a>
)

Button.propTypes = {
    link: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.string,
  }  

export default Button
