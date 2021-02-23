import React from "react"

import Layout from "../../components/layout"
import Card from "../../components/card"
import SEO from "../../components/seo"

import data from "../../../data/staticdata.json"

const DesignSystems = () => (
  <Layout>
    <SEO title="Design Systems" />
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
  </Layout>
)

export default DesignSystems
