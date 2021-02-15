import PropTypes from "prop-types"
import React from "react"
// import cn from "classnames"


import './pill.css'

// const classNames = cn([
//   "pill",
//    {  "pill__category--ux": type === "ux" ],
//    className,
// ]);


const Pill = ({ label, color, type }) => (
        <div className="pill">
          <svg className="pill__sphere" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="4" cy="4" r="4"/>
          </svg>
          <h6 id="pill__text">{label}</h6>
        </div> 
)

Pill.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
}

export default Pill
