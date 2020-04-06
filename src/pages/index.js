import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"



import Layout from "../components/layout"
import Aside from "../components/aside"
import Content from "../components/content"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Damian Dembicki" />
    <Container fluid>
      <Row>
        <Col md="8">
          <Content />
        </Col>

        <Col md="4">
          <Aside />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
