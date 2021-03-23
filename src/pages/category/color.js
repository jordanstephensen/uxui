import React from "react"

import Layout from "../../components/layout"
import Card from "../../components/card"
import SEO from "../../components/seo"

import data from "../../../data/staticdata.json"

const Color = () => (
  <Layout>
    <SEO title="Color" />
      {data.color.map(card => (
        <Card className="cards--color" 
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
      {data.accessibilitycolor.map(card => (
        <Card className="cards--color" 
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
  </Layout>
)

export default Color
