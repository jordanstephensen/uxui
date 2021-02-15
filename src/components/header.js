import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Filter from "../components/filter"
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
        <h4>&nbsp;The Design Internet.</h4>
        {/* <div className="header__filters">
          <Filter label="Design Tools" />
          <Filter label="Design Systems" />
          <Filter label="Color" />
          <Filter label="Icons" />
          <Filter label="Fonts" />
          <Filter label="Accessibility" />
          <Filter label="User Experience" />
        </div> */}
    </div>
    )
  };
};



export default Header
