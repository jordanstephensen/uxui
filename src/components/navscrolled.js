import React from "react"
import NavLink from "../components/navlink"

import './nav.scss'

class NavScrolled extends React.Component {
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

    if (scrollTop > 225) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
    <div className={this.state.hasScrolled ? 'nav--scrolled' : 'nav--hidden'}>
        <NavLink label="All" link="/"/>
        <NavLink label="UX" link="/category/ux"/>
        <NavLink label="Accessibility" link="/category/accessibility"/>
        <NavLink label="UI Design" link="/category/ui-design"/>
        <NavLink label="Design Systems" link="/category/design-systems"/>
        <NavLink label="Icons" link="/category/icons"/>
        <NavLink label="Color" link="/category/color"/>
        <NavLink label="Fonts" link="/category/fonts"/>
        <NavLink label="Code" link="/category/code"/>
        <NavLink label="Communities" link="/category/communities"/>
    </div>
    )
  };
};



export default NavScrolled
