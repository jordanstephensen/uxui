import PropTypes from "prop-types"
import React from "react"
import popout from '../../images/popout-icon.svg'
import Pill from "../pill/pill"


import './card.scss'

const Card = ({ logo, header, category, tag, cost, link, target, children }) => (
  <div className="card">
    <div className="card__contents">
      <div className="card__contents__head">
          <div className="card__contents__head--logo">
            <img id="card__contents__head--logo" src={logo} alt={header}/>
          </div>
          <a className="stretched-link" href={link} target={target} rel="nofollow" />
          {target === "_blank" && 
            <svg className="card__contents__head--icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 1L9 12" stroke="white"/>
              <path d="M17 12V20H1V4H9" stroke="white"/>
              <path d="M12 1H20V9" stroke="white"/>
            </svg>
          }
      </div>
      <div className="card__contents__body">
        <h3 className="card__contents__body-header">{header}</h3>
        <span className="card__contents__body-children">{children}</span>
      </div>
      {/* <div className="card__contents__pill-container">
        <Pill label={category} type={category} />
        <Pill label={tag} type={tag} />
        <Pill label={cost} type={cost} />
      </div> */}
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
