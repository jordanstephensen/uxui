import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import icons from "../../images/icons/icon-icons.svg"

import data from "../../../data/staticdata.json"

const Icons = () => (
  <Layout>
    <SEO title="Icons" />
    <HeaderSub />
      <PageHeader icon={icons} title="Icons" />
        <div className="container">
          <div className="container__column--1">
          <big>
            Open source icon sets in a variety of styles
          </big>
        </div>
        <div className="container__column--2">
          {data.icons.map(card => (
            <Card id="Icons" 
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

export default Icons
