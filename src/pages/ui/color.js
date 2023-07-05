import React from "react"

import Layout from "../../components/layout/layout"
import Card from "../../components/card/card"
import HeaderSub from "../../components/header/headerSub"
import SEO from "../../components/seo"
import PageHeader from "../../components/pageHeader/pageHeader"

import color from "../../images/icons/icon-color.svg"

import data from "../../../data/staticdata.json"

const Color = () => (
  <Layout>
    <SEO title="Color" />
    <HeaderSub />
    <PageHeader icon={color} title="Color" />
      <div className="container">
        <div className="container__column--1">
          <big>
            Find or build color palettes for your project using these tools
          </big>
        </div>
        <div className="container__column--2">
          {data.color.map(card => (
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

export default Color
