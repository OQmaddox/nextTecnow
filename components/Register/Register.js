import { Grid, Paper ,Button} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),

    },
    root: {
        maxWidth: '40%',
        minWidth: 345,
        marginLeft: 'auto',
        marginRight:'auto'
        
    }
}));
const Register = () => {
    const onClickRegister=()=>{
        alert('click en registrar')
    }
    const classes = useStyles()

    return (
        <Grid container spacing={4} >
            <Grid item xs={12}>
                <Paper elevation={3}
                className={classes.root}
                    style={{ textAlign: 'center', paddingTop: '1rem' }}
                >
                    <div>
                        <Grid item xs={12}>
                            <FormControl
                            >
                                <InputLabel htmlFor="input-with-icon-adornment">Cedula</InputLabel>
                                <Input
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.margin}>
                                <InputLabel htmlFor="input-with-icon-adornment">Telefono</InputLabel>
                                <Input
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.margin}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={onClickRegister}
                                >
                                    Guardar
                                </Button >
                            </FormControl>
                        </Grid>


                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Register
