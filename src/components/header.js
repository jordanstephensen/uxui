import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Filter from "../components/filter"
import logo from "../images/uxui-logo.svg"

import './header.css'

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

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
    <div className={this.state.hasScrolled ? 'header HeaderScrolled' : 'header'}>
        <Link to="/">
            <img id="header__logo" src={logo} alt="UXUI"/>
        </Link>
        <div className="header__categories">
          <Filter label="UX" />
          <Filter label="UI" />
          <Filter label="Dev" />
        </div>

    </div>
    )
  };
};



export default Header
