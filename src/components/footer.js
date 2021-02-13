import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
