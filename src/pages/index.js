import React from "react"
import { Container, Row, Col } from "react-bootstrap"

//components
import Layout from "../components/layout"
import Aside from "../components/aside"
import Content from "../components/content"
import SEO from "../components/seo"

//sections
import Services from '../sections/services'

const IndexPage = () => (
  <Layout>
    <SEO title="Damian Dembicki" />
    <Container fluid>
      <Row>
        <Col md="8">
          <Content>
            XD
            <Services />
          </Content>
        </Col>

        <Col md="4">
          <Aside />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
