import PropTypes from "prop-types"
import React from "react"
import Card from "../components/card"

import data from "../../data/staticdata.json"

// import './database.scss'

const DataBase = ({ category }) => (
  <div className="database">
      <div className={`database--${category}`}>
        {data.designtool.map(card => (
            <Card id="UI design tools" 
                logo={card.logo} 
                header={card.header} 
                link={card.link} 
                target={card.target} 
                category={card.category} 
                tag={card.tag} 
                cost={card.cost}>
                    <p>{card.children}</p>
            </Card>
        ))}
    </div>
    {data.designsystem.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <h4>{card.children}</h4>
        </Card>
    ))}
    {data.wireframing.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.color.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.icons.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.fonts.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.repo.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.css.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
    {data.community.map(card => (
        <Card id="UI design tools" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
                <p>{card.children}</p>
        </Card>
    ))}
  </div>
)

DataBase.propTypes = {
    category: PropTypes.string,
  }
  

export default DataBase
