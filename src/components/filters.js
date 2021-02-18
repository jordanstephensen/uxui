import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Filter from "../components/filter"

import './filters.scss'

// class Filters extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       hasScrolled: false
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll)
//   }

//   handleScroll = (event) => {
//     const scrollTop = window.pageYOffset

//     if (scrollTop > 206) {
//       this.setState({ hasScrolled: true })
//     } else {
//       this.setState({ hasScrolled: false })
//     }
//   }

//   render() {
//     return (

const Filters = ({ label, color, type }) => (

<div className="filters">
          <Link to="/design-systems"><Filter label="Design Tools" /></Link>
          <Link to="/design-systems"><Filter label="Icons" /></Link>
          <Link to="/design-systems"><Filter label="Color" /></Link>
          <Link to="/design-systems"><Filter label="Accessibility" /></Link>
          <Link to="/design-systems"><Filter label="Design Systems" /></Link>
    </div>
    )
//   };
// };



export default Filters
