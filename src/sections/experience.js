import React from "react"
import { Col, Row } from "react-bootstrap"

import styles from "./experience.module.css"

import aboutImg from "../images/about-img.jpg"

const Experience = () => {
  return (
    <section id="experience">
      <h2 className={styles.heading}>Experience</h2>
      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet consectetu adipiscing elit viverra tristique
        placerat
      </p>

      <p className={styles.intro}>
        Dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat
        in massa consectetur quisque. Nunc ac fames lectus in libero aliquet
        lorem ipsum dolor sit amet enim est urus tincidunt magna ut turpis eu,
        eu enim. Nisl porttitor elit risus velit urna morbi mauris.
      </p>

      <Row className={styles.experience}>
        <Col className={styles.dates} md="4">2016</Col>
        <Col className={styles.datesDescription} md="8">
          <p>
          <strong>2015 - 2016</strong> placerat in massa consectetur quisque. Nunc ac fames
            lectus in libero aliquet est setera nunc.
          </p>
        </Col>
        <Col className={styles.dates} md="4">2016</Col>
        <Col className={styles.datesDescription} md="8">
          <p>
          <strong>2015 - 2016</strong> placerat in massa consectetur quisque. Nunc ac fames
            lectus in libero aliquet est setera nunc.
          </p>
        </Col>
        <Col className={styles.dates} md="4">2016</Col>
        <Col className={styles.datesDescription} md="8">
          <p>
            <strong>2015 - 2016</strong> placerat in massa consectetur quisque. Nunc ac fames
            lectus in libero aliquet est setera nunc.
          </p>
        </Col>
        <Col className={styles.dates} md="4">2016</Col>
        <Col className={styles.datesDescription} md="8">
          <p>
          <strong>2015 - 2016</strong> placerat in massa consectetur quisque. Nunc ac fames
            lectus in libero aliquet est setera nunc.
          </p>
        </Col>
      </Row>
    </section>
  )
}
export default Experience
