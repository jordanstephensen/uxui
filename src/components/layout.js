import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Topbar from "../components/topbar"
import Header from "../components/header"
import Nav from "../components/nav"
import NavScrolled from "./navscrolled"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Topbar/>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Nav />
        <NavScrolled />

        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
