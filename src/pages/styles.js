import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Styles = () => (
  <Layout title="Styles">
    <SEO title="Styles" />
    <div>
      <h1>Header 1</h1><br />
      <h2>Header 2</h2><br />
      <h3>Header 3</h3><br />
      <h4>Header 4</h4><br />
      <h5>Header 5</h5><br />
      <h6>Header 6</h6><br />
      <big>I am a block of big text with a <a>text link</a></big><br />
      <p>I am a block of paragraph text with a <a>text link</a></p>
    </div>
 </Layout>
)

export default Styles
