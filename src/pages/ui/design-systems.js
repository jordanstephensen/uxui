import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import systems from "../../images/icons/icon-designsystems.svg"

import data from "../../../data/staticdata.json"

const DesignSystems = () => (
  <Layout>
    <SEO title="Design Systems" />
    <HeaderSub />
    <PageHeader icon={systems} title="Design Systems" />
    <div className="container">
      <div className="container__column--1">
        <big>
        A database of open source design systems to adapt or use as reference
        </big>
      </div>
      <div className="container__column--2">
        {data.designsystem.map(card => (
          <Card className="cards--design-systems" 
            logo={card.logo} 
            header={card.header} 
            link={card.link} 
            target={card.target} 
            category={card.category} 
            tag={card.tag} 
            cost={card.cost}>
              <big>{card.children}</big>
          </Card>
       ))}
      </div>
    </div>
    <div className="spacer" />
  </Layout>
)

export default DesignSystems
