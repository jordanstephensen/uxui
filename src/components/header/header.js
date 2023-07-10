import { Link } from "gatsby"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import icon from "../../images/uxui-icon.svg"
import github from "../../images/github.svg"

import './header.scss'

class Header extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        hasScrolled: false
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }
  
    handleScroll = (event) => {
      const scrollTop = window.pageYOffset
  
      if (scrollTop > 300) {
        this.setState({ hasScrolled: true })
      } else {
        this.setState({ hasScrolled: false })
      }
    }
  
  render() {
    return (
    <div className={this.state.hasScrolled ? 'header header--scrolled' : 'header'}>
        <AnchorLink to="/#top">
          <img className="header__logo" src={icon} alt="UXUI"/>
        </AnchorLink>
        <div className="header__nav-links">
          <AnchorLink activeClassName="header__nav-links--active" to="/#ux">UX Resources</AnchorLink>
          <AnchorLink activeClassName="header__nav-links--active" to="/#ui">UI Resources</AnchorLink>
          <Link activeClassName="header__nav-links--active" to="https://github.com/jordanstephensen/uxui" target="_blank">
            <img src={github} alt="Github source files"/>
          </Link>
        </div>
      </div>
    )
  };
};

  export default Header
