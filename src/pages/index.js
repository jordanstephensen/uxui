import PropTypes from "prop-types"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
import info from "../images/icons/icon-info.svg"
import mail from "../images/icons/icon-mail.svg"

import data from "../../data/staticdata.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Header />
      <div className="section section__home--hero">
        <div className="container">
          <div className="container__column--1">
            <big className="section__home--hero__intro">
              Free or open-source tools and resources
              for the entire product design process
            </big>
          </div>
          <div className="container__column--2 section__home--hero__nav">
            <div className="container__column--1">
              <AnchorLink className="section__home--hero__nav__link-header" to="/#ux">
                <h1>UX</h1>
              </AnchorLink>
              <div className="section__home--hero__nav__link-container">
                <a className="section__home--hero__nav__link-container__link" href="/ux/accessibility">
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
                </a> */}
                <a className="section__home--hero__nav__link-container__link" href="/ux/templates">
                  <img className="section__home--hero__nav__link-container__link-icon" src={templates} alt="UX Templates icon"/>
                  <big className="section__home--hero__nav__link-container__link-text">Templates</big>
                </a>
              </div>
            </div>
            <div className="container__column--1">
              <AnchorLink className="section__home--hero__nav__link-header" to="/#ui">
                <h1>UI</h1>
              </AnchorLink>
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

      <div className="section__home--info">
        <div className="section__home--info__left">
          <img className="section__home--info__left-icon" src={info} alt="Info icon"/>
          <big>
            UXUI is a database of product design resources curated by <a href="https://www.jordanstephensen.com" target="_blank">Jordan Stephensen</a>. Updated periodically.
          </big>
          <p>
            Last updated July 2023
          </p>
        </div>
        <div className="section__home--info__right">
          <img className="section__home--info__right-icon" src={mail} alt="Mail icon"/>
          <big>
            Have you created a product design resource or tool?
          </big>
          <big>
            <a href="mailto:jordanstephensen@gmail.com" target="_blank">Submit a resource here</a>
          </big>
        </div>
      </div>

      <div id="ux" className="section section__home--ux">
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
              logo={a11y} 
              header="Accessibility" 
              link="/ux/accessibility" 
              target="_self"
              >
                <p>Building inclusive products that can be used by everyone is important. Create accessible products using these tools, guidelines, and references.</p>
            </Card>

            <Card 
              logo={templates} 
              header="Templates" 
              link="/ux/templates" 
              target="_self"
              >
                <p>From journey mapping to usability testing, these templates will help structure and expidite your UX process</p>
            </Card>
          </div>
        </div>
      </div>

      <div id="ui" className="section section__home--ui">
        <div className="container">
          <div className="container__column--1">
            <h2>UI</h2>
            <h3>User Interface</h3>
            <big>
              The user interface (UI) is the point of human-computer interaction and communication in a device. This can include display screens, keyboards, a mouse and the appearance of a desktop. It is also the way through which a user interacts with an application or a website.
            </big>
          </div>
          <div className="container__column--2">
            <Card 
              logo={color} 
              header="Color" 
              link="/ui/color" 
              target="_self"
              >
                <p>Find or build color palettes for your project using these tools</p>
            </Card>

            <Card 
              logo={systems} 
              header="Design Systems" 
              link="/ui/design-systems" 
              target="_self"
              >
                <p>A database of open source design systems to adapt or use as reference</p>
            </Card>

            <Card 
              logo={fonts} 
              header="Fonts" 
              link="/ui/fonts" 
              target="_self"
              >
                <p>Find the perfect font for your product with this collection of open source resources</p>
            </Card>

            <Card 
              logo={icons} 
              header="Icons" 
              link="/ui/icons" 
              target="_self"
              >
                <p>Open source icon sets in a variety of styles</p>
            </Card>
          </div>
        </div>
      </div>





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
