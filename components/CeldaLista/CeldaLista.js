import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
const CeldaLista = () => {
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Typography style={{padding:'1rem'}}>
                        5:00 AM
                       </Typography>
                </ListItemAvatar>
                <ListItemText primary="Ruta: Cayambe-Olmedo-Ibarra" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default CeldaLista
