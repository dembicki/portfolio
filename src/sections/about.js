import React from "react"
import { Col, Row } from "react-bootstrap"

import styles from "./about.module.css"

import aboutImg from "../images/about-img.jpg"

const About = () => {
  const ContactDetails = [
    {
      type: "EMAIL",
      content: "nikeid1235@gmail.com",
    },
    {
      type: "ROLE",
      content: "Front End Developer & Graphic Designer",
    },
    {
      type: "PHONE",
      content: "+48 792 321 813",
    },
  ]

  return (
    <section id="about">
      <h2 className={styles.heading}>About</h2>
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

      <div className={styles.imageOuter}>
        <img src={aboutImg} />
      </div>

      <Row>
        <Col md="8">
          <p>
            Nam ultrices ultrices nec tortor pulvinar fermentum mi. Sociis sit
            tristique sagittis, mauris volutpat estera phasellus. Varius nec
            orci, quam augue lorem lines pellentesque non id. Tristique amet
            volutpat nunc euismod. Mauris felis at quam sollicitudin est sempe
            vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim.
            Nisl porttitor elit risus velit urna morbit mauris at proin laoreet
            lobortis urna aliquam setera fermentum sit iaculis vitae hendrerit
            et. Arcu ac est dictum lorem ispum dolor sit amet nunc usrus seio.
          </p>
        </Col>
        <Col md="4">
          <div className={styles.contactWrapper}>
            {ContactDetails.map(e => {
              return (
                <div key={e.type} className={styles.contactInner}>
                  <span className={styles.extra}>{e.type}</span>
                  <br></br>
                  {e.content}
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12" style={{marginTop:`-30px`}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tristique placerat in sat massa consectetur quisque. Nunc aces fames
            lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet
            settera aces volutpat in voltare lupar est phasellus. Faucibus sed
            tristique fames sed aliquet ultricies eget viverra arcu. 
            <br></br><br></br>
            Vitae
            faucibus diam consequat aecenas. Turpis metus sit diam purus leo in
            varius ac quam. Nunc amet sei tristique set volutpat vulputate est
            phasellus. Volutpat faucibus per praesent aced no nuncare voltare
            per settera lorem ipsum dolor loboritas prion mauris varius est.
          </p>
        </Col>
      </Row>
    </section>
  )
}
export default About
