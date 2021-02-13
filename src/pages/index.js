import React from "react"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

import uicards from "../../data/uicards.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      {uicards.cards.map(card => (
        <Card id="UI design tools" logo={card.logo} header={card.header} link={card.link} target={card.target} category={card.category} tag={card.tag} cost={card.cost}>{card.children}</Card>
      ))}
  </Layout>
)

export default IndexPage
