import PropTypes from "prop-types"
import React from "react"

import './button.scss'

const Button = ({ link, type, children }) => (
  <form action={link}>
    <button type={type}>
        {children}
    </button>
  </form>
)

Button.propTypes = {
    link: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.string,
  }  

export default Button
