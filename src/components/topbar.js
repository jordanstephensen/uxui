import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "../components/button"
import github from "../images/github.svg"


import './topbar.css'

const Topbar = ({ children }) => (
  <topbar>
      <Button type="button" link="https://github.com/jordanstephensen/uxui"><img src={github} alt="Github logo"/> &nbsp; Beta v0.1.1</Button>
      <Button type="button" link="https://github.com/jordanstephensen/uxui">About</Button>
  </topbar>
)



export default Topbar
