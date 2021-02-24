import PropTypes from "prop-types"
import React from "react"
import popout from '../images/popout-icon.svg'
import Pill from "../components/pill"


import './card.scss'

const Card = ({ logo, header, category, tag, cost, link, target, children }) => (
  <div className="card">
    <div className="card__contents">
      <div className="card__contents__head">
          <div className="card__contents__head--logo"><img id="card__contents__head--logo" src={logo} alt={header}/></div>
          <a className="stretched-link" href={link} target={target} rel="nofollow" >
            <img id="card__contents__head--icon" src={popout} alt="pop out icon"/>
          </a>
      </div>
      <div className="card__contents__body">
        <h3>{header}</h3>
        {children}
      </div>
      <div className="card__contents__pill-container">
        <Pill label={category} type={category} />
        <Pill label={tag} type={tag} />
        <Pill label={cost} type={cost} />
      </div>
    </div>
  </div>
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
