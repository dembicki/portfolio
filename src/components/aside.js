import React from 'react'
import {Container, Row, Column} from 'react-bootstrap'

import styles from '../components/asideStyles.module.css'

const Aside = () => (
    <div className={styles.wrapper}>
        <Container>
            <p>Helo there. (aside)</p>
        </Container>
    </div>
)

export default Aside