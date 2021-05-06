import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SvgIcon from '@material-ui/core/SvgIcon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Grid, Paper } from '@material-ui/core';
import Link from 'next/link'


const useStyles = makeStyles({
    root: {

    },
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Header = ({ children }) => {

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container alignContent='center'
            alignItems='center'
        >
            <Grid item xs={12}>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <Link href="/Home">
                        <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} />
                    </Link>
                    <Link href="/Horarios">
                        <BottomNavigationAction label="Horarios" value="favorites" icon={<QueryBuilderIcon />} />

                    </Link>
                    <Link href="/Rutas">
                        <BottomNavigationAction label="Rutas" value="nearby" icon={<LocationOnIcon />} />

                    </Link>
                    <Link href="/Reclamos">
                        <BottomNavigationAction label="Reclamos" value="folder" icon={<SentimentVeryDissatisfiedIcon />} />

                    </Link>
                </BottomNavigation>
            </Grid>
            {children}
        </Grid>
    )
}

export default Header
