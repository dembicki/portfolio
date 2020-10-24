import React from "react"
import { Container, Row, Col } from "react-bootstrap"

//components
import Layout from "../components/layout"
import Aside from "../components/aside"
import Content from "../components/content"
import SEO from "../components/seo"
import Footer from "../components/footer"

//sections
import Services from '../sections/services'
import About from '../sections/about'
import Experience from '../sections/experience'
import Contact from '../sections/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Damian Dembicki" />
    <Container fluid>
      <Row>
        <Col md="8">
          <Content>
            <Services />
            <About />
            <Experience />
            <Contact />
          </Content>
        </Col>

        <Col md="4">
          <Aside />
        </Col>
      </Row>
    </Container>
    <Footer content="XD"/>
  </Layout>
)

export default IndexPage
