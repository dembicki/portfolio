import React from "react"

import styles from "../components/socialStyles.module.css"

export default () => {
  const socialLinks = [
    {
      name: "INSTA.",
      link: "https://www.dribbble.com/",
    },
    {
      name: "FACEB.",
      link: "https://www.facebook.com/",
    },
    {
      name: "LINKEDIN.",
      link: "https://www.linkedin.com/",
    },
  ]
  
  return (
    <ul className={styles.social}>
      {socialLinks.map(e => {
        return <li key={e.name}><a href={e.link}>{e.name}</a></li>
      })}
    </ul>
  )
}
