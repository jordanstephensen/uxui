import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Nav from "../components/nav"
import NavScrolled from "./navscrolled"
import Footer from "../components/footer"
import Button from "../components/button"
import github from "../images/github.svg"

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
      <div className="site">
        <div className="site-top--left">
          <Button link="https://github.com/jordanstephensen/uxui" target="_blank">
            <img className="site-top--left-github" src={github} alt="GitHub logo"/> &nbsp; Source
            </Button>
        </div>
        <div className="site-top--right">
          <Button link="/about">About</Button>
        </div>
        <NavScrolled />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Nav />
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
