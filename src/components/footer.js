import { Link } from "gatsby"
import React from "react"

import './footer.scss'

const Footer = ({ children }) => (
  <div className="footer">
    <div class="footercontents">
      <h4 class="copyright">
        © {new Date().getFullYear()}
      </h4>
      </div>
  </div>
)

export default Footer
