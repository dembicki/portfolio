import React from 'react'
import {Container, Row, Column} from 'react-bootstrap'

import styles from '../components/asideStyles.module.css'

import Title from '../components/title'
import Navigation from '../components/navigation'
import Counter from '../components/counter'
import Social from '../components/social'

const Aside = () => (
    <div className={styles.wrapper}>
        <Container className={styles.container}>
            <Counter />
            <Title />
            <Navigation/>
            <Social />
        </Container>
    </div>
)

export default Aside