import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import SEO from "../../components/seo"

import data from "../../../data/staticdata.json"

const Code = () => (
  <Layout>
    <SEO title="Code" />
      {data.css.map(card => (
        <Card className="cards--css" 
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
        <Card className="cards--repo" 
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

export default Code
