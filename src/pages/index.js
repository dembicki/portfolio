import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"



import Layout from "../components/layout"
import Aside from "../components/aside"
import Content from "../components/content"
import SEO from "../components/seo"
import Title from '../components/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col md="8">
          <Content />>
        </Col>

        <Col md="4">
          <Aside />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
