import React from "react"

import Layout from "../../components/layout"
import Card from "../../components/card/card"
import SEO from "../../components/seo"

import data from "../../../data/staticdata.json"

const UIDesign = () => (
  <Layout>
    <SEO title="UI Design" />
      {data.designtool.map(card => (
        <Card className="design-tools" 
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

export default UIDesign
