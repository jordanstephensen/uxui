import React from "react"

import SEO from "../components/seo"
import logo from "../images/uxui-logo.svg"
import js from "../images/JS-logo.svg"
// import { PageProps, Link, graphql } from "gatsby"
import { Link } from "gatsby"

// type DataProps = {
//     site: {
//       buildTime: string
//     }
//   }

// const About: React.FC<PageProps<DataProps>> = ({ data, path }) =>(
const About = () => (
    <>
    <div className="about">
    <SEO title="Home" />
        <div className="about__content">
            <Link to="/">
                <img className="header__logo" src={logo} alt="UXUI"/>
            </Link>
            <h4>
                is a project intended to highlight free and open-source <br /> 
                product design tools, assets, resources, and thier creators.
            </h4>
            <h5>
            This site was built using Gatsby and hosted on Netlify. <br />
                Fonts used are <a href="https://www.jetbrains.com/lp/mono/">Jetbrains Mono</a> and <a href="https://rsms.me/inter/">Inter</a> <br />
                Build and deployment are triggered at every push to master. <br />
                The site is currently in Beta and still a bit of a WIP. <br />
                <a href="https://github.com/jordanstephensen/uxui">You are viewing v0.1.1</a>
            </h5>
            <br />
            <h5>
                Made by <br />
                <a href="https://www.jordanstephensen.com">Jordan Stephensen</a>
            </h5>
            <a href="https://www.jordanstephensen.com">
                <img className="about__logo-js" src={js} alt="Jordan Stephensen"/>
            </a>
            <br />
            <h5>
                (c) 2021
            </h5>
            <br />
            <br />
            {/* <h6>
                This site was built using Gatsby and hosted on Netlify. <br />
                Fonts used are <a href="https://www.jetbrains.com/lp/mono/">Jetbrains Mono</a> and <a href="https://rsms.me/inter/">Inter</a> <br />
                Build and deployment are triggered at every push to master. <br />
                The site is currently in Beta and still a bit of a WIP. <br />
                <a href="https://github.com/jordanstephensen/uxui">You are viewing v0.1.1</a>
            </h6> */}
        </div>
    </div>
  </>
)

export default About

// You are viewing v0.1.1 • Built at {" "}{data.site.buildTime}


// export const query = graphql`
//   {
//     site {
//       buildTime(formatString: "YYYY-MM-DD hh:mm a z")
//     }
//   }
// `