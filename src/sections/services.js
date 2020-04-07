import React from "react"

import styles from "./services.module.css"

import placeholder from "../images/150.png"
import code from "../images/code.png"
import develop from "../images/develop.png"
import promote from "../images/promote.png"
import design from "../images/design.png"

const Services = () => {
  const skills = [
    {
      image: design,
      title: "Design",
      description:
        "A full stack allaround designer that may or may not include a guide for specific createive",
    },
    {
      image: code,
      title: "Code",
      description:
        "Tellus pharetra erat tristique erat donec dignissim etiam sed malesuada enim sodales",
    },
    {
      image: develop,
      title: "Develop",
      description:
        "A full stack allaround designer that may or may not include a guide for specific createive",
    },
    {
      image: promote,
      title: "Promote",
      description:
        "Tellus pharetra erat tristique erat donec dignissim etiam sed malesuada enim sodales",
    },
  ]

  return (
    <section id="services">
      <h2 className={styles.heading}>Services</h2>
      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet consectetu adipiscing elit viverra tristique
        placerat
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        tristique placerat in sat massa consectetur quisque. Nunc aces fames
        lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet
        settera aces volutpat in voltare lupar est phasellus.
        <br></br>
        <br></br>
        Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.
        Vitae faucibus diam consequat aecenas. Turpis metus sit diam purus leo
        in varius ac quam. Nunc amet tristique set volutpat estars adipiscing
        vulputate est phasellus. Volutpat faucibus per praesent aced nuncare
        voltare per settera lorem ipsum dolor.
      </p>
      <div className={styles.outer}>
        <a href="#">Download CV</a>
        <a href="#">My portfolio</a>
      </div>

      <div className={styles.outerGrid}>
        {skills.map(skill => {
          return (
            <div key={skill.title} className={styles.innerGridItem}>
              <img src={skill.image} />
              <h2 className={styles.title}>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Services
