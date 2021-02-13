import PropTypes from "prop-types"
import React from "react"

import './filter.css'

const Fill = ({ label }) => (
        <h4 className="filter">{label}</h4> 
)

Fill.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Fill
