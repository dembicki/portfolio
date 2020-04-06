import React from 'react'
import {Container, Row, Column} from 'react-bootstrap'

import styles from '../components/asideStyles.module.css'

import Title from '../components/title'
import Navigation from '../components/navigation'
import Counter from '../components/counter'

const Aside = () => (
    <div className={styles.wrapper}>
        <Container>
            <Counter />
            <Title />
            <Navigation/>
            <p>Helo there. (aside)</p>
        </Container>
    </div>
)

export default Aside