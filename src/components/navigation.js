import React from "react"

import styles from "../components/navigationStyles.module.css"

export default () => {
  const menuLinks = ['home','services','about','portfolio','skills','contact']
  return (
    <nav>
      <ul>
        {menuLinks.map( (e) => {
            return (<li key={e}><a href={'#' + e}>{e}</a></li>)
        })}
      </ul>
    </nav>
  )
}
