import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import SEO from "../../components/seo"

import data from "../../../data/staticdata.json"

const TemplatesPage = () => (
  <Layout>
    <SEO title="Templates" />
      {data.wireframing.map(card => (
        <Card  
          logo={card.logo} 
          header={card.header} 
          link={card.link} 
          target={card.target} 
          category={card.category} 
          tag={card.tag} 
          cost={card.cost}>
            {card.children}
        </Card>
      ))}
  </Layout>
)

export default TemplatesPage
