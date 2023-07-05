import { Link } from "gatsby"
import React from "react"

import icon from "../../images/uxui-icon.svg"
import education from "../../images/icons/icon-education.svg"
import a11y from "../../images/icons/icon-a11y.svg"
import templates from "../../images/icons/icon-templates.svg"
import references from "../../images/icons/icon-references.svg"
import systems from "../../images/icons/icon-designsystems.svg"
import color from "../../images/icons/icon-color.svg"
import icons from "../../images/icons/icon-icons.svg"
import fonts from "../../images/icons/icon-fonts.svg"
import info from "../../images/icons/icon-info.svg"
import mail from "../../images/icons/icon-mail.svg"

import './footer.scss'

const Footer = ({ children }) => (
  <div className="footer section">
    <div className="container">
      <div className="container__column--1">
        <Link to="/">
          <img className="footer__logo" src={icon} alt="UXUI"/>
        </Link>
        <h4 class="copyright">
          © {new Date().getFullYear()} 
        </h4>
        <big>
          {/* <a href="https://www.jordanstephensen.com" target="_blank">Jordan Stephensen</a><br/> */}
          <a href="mailto:jordanstephensen@gmail.com" target="_blank">Submit a resource</a>
        </big>
      </div>
      <div className="container__column--2">
        <div className="container__column--1">
          <h3>UX</h3>
          <a className="section__home--hero__nav__link-container__link-text" href="/ux/accessibility">Accessibility</a>
          <a className="section__home--hero__nav__link-container__link-text" href="/ux/templates">Templates</a>
        </div>
        <div className="container__column--1">
          <h3>UI</h3>
          <a className="section__home--hero__nav__link-container__link-text" href="/ui/color">Color</a>
          <a className="section__home--hero__nav__link-container__link-text" href="/ui/design-systems">Design Systems</a>
          <a className="section__home--hero__nav__link-container__link-text" href="/ui/fonts">Fonts</a>
          <a className="section__home--hero__nav__link-container__link-text" href="/ui/icons">Icons</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
