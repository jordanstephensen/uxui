import React from "react"
import PropTypes from "prop-types"
// import Header from "../header/header"
import Footer from "../footer/footer"

import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="contents">
      {/* <Header/> */}
        <div className="contents__main">
          {children}
        </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
