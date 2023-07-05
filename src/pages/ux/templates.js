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
        <div className="container__column--1">
          <big>
          From journey mapping to usability testing, these templates will help structure and expidite your UX process
          </big>
        </div>
        <div className="container__column--2">
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
    </div>
    <div className="spacer" />
  </Layout>
)

export default TemplatesPage
