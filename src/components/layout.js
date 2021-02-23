/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Topbar from "../components/topbar"
import Header from "../components/header"
import Nav from "../components/nav"
import Filters from "../components/filters"
import FiltersScrolled from "../components/filtersscrolled"
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
        {/* <Nav /> */}
        {/* <FiltersScrolled /> */}

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
