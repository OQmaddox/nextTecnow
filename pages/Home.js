import React from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import Register from '../components/Register/Register'
import { Container } from '@material-ui/core'

const Home = () => {
    return (
        <Header>
            <Container>
                <Cards></Cards>
                <Cards></Cards>
                <Register></Register>
            </Container>
        </Header>
    )
}

export default Home
