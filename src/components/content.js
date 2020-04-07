import React from 'react'

import styles from '../components/contentStyles.module.css'
import Services from '../sections/services'



export default ({ children }) => (
    <main className={styles.wrapper}>
        {children}
    </main>
)
