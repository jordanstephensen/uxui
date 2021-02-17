import PropTypes from "prop-types"
import React from "react"

import './filter.css'

const Filter = ({ label }) => (
      <filter >
        <h4>{label}</h4> 
      </filter>
)

Filter.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Filter
