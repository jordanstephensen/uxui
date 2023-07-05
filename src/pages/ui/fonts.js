import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import fonts from "../../images/icons/icon-fonts.svg"

import data from "../../../data/staticdata.json"

const Fonts = () => (
  <Layout>
    <SEO title="Fonts" />
    <HeaderSub />
      <PageHeader icon={fonts} title="Fonts" />
      <div className="container">
        {data.fonts.map(card => (
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
      </div>
  </Layout>
)

export default Fonts
