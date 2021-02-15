import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "../components/button"
import github from "../images/github.svg"


import './topbar.css'

const Topbar = ({ children }) => (
  <topbar>
    <div className="topbar__container--left">
      <Button link="https://github.com/jordanstephensen/uxui"><img src={github} alt="Github logo"/> &nbsp; v 1.0</Button>
    </div>
  </topbar>
)



export default Topbar
