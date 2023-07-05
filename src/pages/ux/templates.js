import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import templates from "../../images/icons/icon-templates.svg"

import data from "../../../data/staticdata.json"

const TemplatesPage = () => (
  <Layout>
    <SEO title="Templates" />
      <HeaderSub />
      <PageHeader icon={templates} title="Templates" />
      <div className="container">
      {data.templates.map(card => (
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
    </div>
  </Layout>
)

export default TemplatesPage
