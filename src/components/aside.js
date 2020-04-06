import React from 'react'
import {Container} from 'react-bootstrap'

import styles from '../components/asideStyles.module.css'

import Title from '../components/title'
import Navigation from '../components/navigation'
import Counter from '../components/counter'
import Social from '../components/social'

const Aside = () => (
    <header className={styles.wrapper}>
        <Container className={styles.container}>
            <Counter />
            <Title />
            <Navigation/>
            <Social />
        </Container>
    </header>
)

export default Aside