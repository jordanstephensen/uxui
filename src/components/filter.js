import PropTypes from "prop-types"
import React from "react"

import './filter.css'

const Filter = ({ label }) => (
        <h4 className="filter">{label}</h4> 
)

Filter.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Filter
