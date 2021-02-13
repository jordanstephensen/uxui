import PropTypes from "prop-types"
import React from "react"
import popout from '../images/popout-icon.svg'
import Pill from "../components/pill"


import './card.css'

const Card = ({ logo, header, category, tag, cost, link, target, children }) => (
  <card>
    <div className="card-contents">
      <div className="card-contents__head">
          <img id="card-contents__head--logo" src={logo} alt={header}/>
          <a className="stretched-link" href={link} target={target} rel="nofollow" >
            <img id="card-contents__head--icon" src={popout} alt="pop out icon"/>
          </a>
      </div>
      <div className="card-contents__body">
        <h3>{header}</h3>
        <p>{children}</p>
      </div>
      <div className="card-contents__pill-container">
        <Pill label={category} type={category} />
        <Pill label={tag} type={tag} />
        <Pill label={cost} type={cost} />
      </div>
    </div>
  </card>
)

Card.propTypes = {
  logo: PropTypes.string,
  header: PropTypes.string,
  category: PropTypes.string,
  tag: PropTypes.string,
  cost: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.string,
}



export default Card
