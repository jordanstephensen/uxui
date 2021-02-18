import PropTypes from "prop-types"
import React from "react"

import './filter.scss'

const Filter = ({ label }) => (
      <filter >
        <h5>{label}</h5> 
      </filter>
)

Filter.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Filter
