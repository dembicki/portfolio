import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, border: `1px solid red` }}>
      <h2>test</h2>
    </div>
  </Layout>
)

export default IndexPage
