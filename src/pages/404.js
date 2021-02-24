import React from "react"

import icon from "../images/uxui-icon.svg"
import home from "../images/home.svg"
import SEO from "../components/seo"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <>
  <div className="not-found" >
  <SEO title="404: Not Found" />
      <div className="about__content">
          <Link to="/">
              <img className="header__logo" src={icon} alt="UXUI"/>
          </Link>
          <h4>
            There’s nothing here.
          </h4>
          <Link to="/">
              <h5>Go back home</h5>
          </Link>
          <Link to="/">
              <img className="about__logo-js" src={home} alt="Jordan Stephensen"/>
          </Link>
      </div>
  </div>
</>
)

export default NotFoundPage
