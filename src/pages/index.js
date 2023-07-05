import PropTypes from "prop-types"
import React from "react"

import Layout from "../components/layout/layout"
import Card from "../components/card/card"
import Header from "../components/header/header"
import SEO from "../components/seo"

import education from "../images/icons/icon-education.svg"
import a11y from "../images/icons/icon-a11y.svg"
import templates from "../images/icons/icon-templates.svg"
import references from "../images/icons/icon-references.svg"
import systems from "../images/icons/icon-designsystems.svg"
import color from "../images/icons/icon-color.svg"
import icons from "../images/icons/icon-icons.svg"
import fonts from "../images/icons/icon-fonts.svg"

import data from "../../data/staticdata.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Header />
      <div className="section__home--hero">
        <div className="container">
          <div className="container__column--1">
            <big className="section__home--hero__intro">
              Free and open-source tools and resources
              for the entire product design process.
            </big>
          </div>
          <div className="container__column--2 section__home--hero__nav">
            <div className="container__column--1">
              <h1>UX</h1>
              <div className="section__home--hero__nav__link-container">
                <a className="section__home--hero__nav__link-container__link" href="/ux/a11y">
                  <img className="section__home--hero__nav__link-container__link-icon" src={a11y} alt="UX Accessibility icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Accessibility</big>
                </a>
                {/* <a className="section__home--hero__nav__link-container__link" href="/ux/education">
                  <img className="section__home--hero__nav__link-container__link-icon" src={education} alt="UX Education icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Education</big>
                </a>
                <a className="section__home--hero__nav__link-container__link" href="/ux/reference">
                  <img className="section__home--hero__nav__link-container__link-icon" src={references} alt="UX References icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">References</big>
                </a>
                <a className="section__home--hero__nav__link-container__link" href="/ux/templates">
                  <img className="section__home--hero__nav__link-container__link-icon" src={templates} alt="UX Templates icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Templates</big>
                </a> */}
              </div>
            </div>
            <div className="container__column--1">
              <h1>UI</h1>
              <div className="section__home--hero__nav__link-container">
                <a className="section__home--hero__nav__link-container__link" href="/ui/color">
                  <img className="section__home--hero__nav__link-container__link-icon" src={color} alt="UI Color icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Color</big>
                </a>
                <a className="section__home--hero__nav__link-container__link" href="/ui/design-systems">
                  <img className="section__home--hero__nav__link-container__link-icon" src={systems} alt="UI Design Systems icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Design Systems</big>
                </a>
                <a className="section__home--hero__nav__link-container__link" href="/ui/fonts">
                  <img className="section__home--hero__nav__link-container__link-icon" src={fonts} alt="UI Fonts icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Fonts</big>
                </a>
                <a className="section__home--hero__nav__link-container__link" href="/ui/icons">
                  <img className="section__home--hero__nav__link-container__link-icon" src={icons} alt="UI Icons icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Icons</big>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section__home--ux">
        <div className="container">
          <div className="container__column--1">
            <h2>UX</h2>
            <h3>User Experience</h3>
            <big>
              User experience (UX) focuses on having a deep understanding of users, what they need, what they value, their abilities, and also their limitations. It also takes into account the business goals and objectives of the group managing the project.
            </big>
          </div>
          <div className="container__column--2">
            <Card
              logo={education} 
              header="Accessibility" 
              link="/accessibility" 
              category="XX" 
              tag="XX" 
              cost="XX">
                <h4>Accessibility resources</h4>
            </Card>
            <Card
              logo={education} 
              header="Accessibility" 
              link="/accessibility" 
              category="XX" 
              tag="XX" 
              cost="XX">
                <h4>Accessibility resources</h4>
            </Card>
            <Card
              logo={education} 
              header="Accessibility" 
              link="/accessibility" 
              category="XX" 
              tag="XX" 
              cost="XX">
                <h4>Accessibility resources</h4>
            </Card>
            <Card
              logo={education} 
              header="Accessibility" 
              link="/accessibility" 
              category="XX" 
              tag="XX" 
              cost="XX">
                <h4>Accessibility resources</h4>
            </Card>
          </div>
        </div>
      </div> */}




      {/* {data.designtool.map(card => (
        <Card id="UI design tools" 
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
      {data.designsystem.map(card => (
        <Card id="UI design tools" 
          logo={card.logo} 
          header={card.header} 
          link={card.link} 
          target={card.target} 
          category={card.category} 
          tag={card.tag} 
          cost={card.cost}>
            <h4>{card.children}</h4>
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
            <p>{card.children}</p>
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
            <p>{card.children}</p>
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
            <p>{card.children}</p>
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
            <p>{card.children}</p>
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
            <p>{card.children}</p>
        </Card>
      ))}
      {data.css.map(card => (
        <Card id="UI design tools" 
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
      {data.community.map(card => (
        <Card id="UI design tools" 
          logo={card.logo} 
          header={card.header} 
          link={card.link} 
          target={card.target} 
          category={card.category} 
          tag={card.tag} 
          cost={card.cost}>
            <p>{card.children}</p>
        </Card>
      ))} */}
  </Layout>
)

export default IndexPage
