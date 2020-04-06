import React from 'react'

import styles from '../components/contentStyles.module.css'
import Services from '../sections/services'



const Content = () => (
    <main className={styles.wrapper}>
        <Services />
        <Services />
    </main>
)

export default Content