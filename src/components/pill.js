import PropTypes from "prop-types"
import React from "react"

import './pill.scss'


const Pill = ({ label, color, type }) => (
        <div className="pill" >
          {/* <svg className="pill__sphere" id={label} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="4" cy="4" r="4"/>
          </svg> */}
          <h6 className="pill__text">{label}</h6>
        </div> 
)

Pill.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
}

export default Pill
