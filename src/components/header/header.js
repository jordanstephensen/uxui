import { Link } from "gatsby"
import React from "react"

import icon from "../../images/uxui-icon.svg"

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
        <Link to="/">
          <img className="header__logo" src={icon} alt="UXUI"/>
        </Link>
        <div className="header__nav-links">
          {/* <Link activeClassName="header__nav-links--active" to="/">UX Resources</Link>
          <Link activeClassName="header__nav-links--active" to="/">UI Resources</Link> */}
          <Link activeClassName="header__nav-links--active" to="/about">About</Link>
        </div>
      </div>
    )
  };
};

  export default Header
