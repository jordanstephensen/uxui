import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import a11y from "../../images/icons/icon-a11y.svg"

import data from "../../../data/staticdata.json"

const Accessibility = () => (
  <Layout>
    <SEO title="Accessibility" />
      <HeaderSub />
      <PageHeader icon={a11y} title="Accessibility" />
      <div className="container">
        <div className="container__column--1">
          <big>
          Building inclusive products that can be used by everyone is important. Create accessible products using these tools, guidelines, and references.
          </big>
        </div>
        <div className="container__column--2">
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
      </div>
    </div>
    <div className="spacer" />

  </Layout>
)

export default Accessibility
