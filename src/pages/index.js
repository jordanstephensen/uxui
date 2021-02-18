import React from "react"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

import data from "../../data/staticdata.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      {data.designtool.map(card => (
        <Card id="UI design tools" 
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
      {data.designsystem.map(card => (
        <Card id="UI design tools" 
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
      {data.wireframing.map(card => (
        <Card id="UI design tools" 
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
      {data.color.map(card => (
        <Card id="UI design tools" 
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
      {data.icons.map(card => (
        <Card id="UI design tools" 
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
      {data.fonts.map(card => (
        <Card id="UI design tools" 
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
      {data.repo.map(card => (
        <Card id="UI design tools" 
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

export default IndexPage
