import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import React from 'react'
import Header from '../components/Header/Header'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import CeldaLista from '../components/CeldaLista/CeldaLista'

const useStyles = makeStyles((theme) => ({
    root: {

        maxWidth: '40%',
        minWidth: 345,
        marginLeft: 'auto',
        marginRight:'auto'
    },
}));
const Horarios = () => {
    const classes = useStyles();
    return (
        <Header>
            <Container>
                <Grid container 
                item xs={12}
                justify='center'>
                    <Grid item>
                        <Paper elevation={3}>
                            <List className={classes.root}>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista><CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista><CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                            <CeldaLista></CeldaLista>
                                
                                
                                
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Header>
    )
}

export default Horarios
