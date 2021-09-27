import React from 'react';

import { Typography, CssBaseline, makeStyles, Toolbar, AppBar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
    navbar: {
        zIndex: theme.zIndex.drawer+1
    },
    logo: {
        marginRight: '1rem',
        marginLeft: '.5rem',
        width: '3rem'
    },
    icon: {
        padding: '0 1rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover':{
            background: '#1a73e8',
            color: theme.palette.background.paper
        },
    },
    navLeft: {
        flexGrow: 1
    },
    smallImage: {
        width: '2rem',
        height: '2rem',
        cursor: 'pointer',
        margin: '0 .2rem',
        marginRight: '1em'
    },
}));

export default function Header(){

    const classes = useStyles()

    return (
          <>
            <CssBaseline />
            <AppBar disableGutters className={classes.navbar} color='paper' position="fixed" justify-content="space-between">
                <Toolbar disableGutters className={classes.tool} position='right'>
                    <img className={`${classes.smallImage} ${classes.logo}` } src={"media/logo.png"} alt="" />
                    <Typography className={`${classes.icon} active`} variant="p">PATIENTS</Typography>
                    <Typography className={classes.icon} variant="p">CALENDAR</Typography>
                    <Typography className={classes.icon} variant="p">USERS</Typography>
                    <Typography className={classes.icon} variant="p">BILLING</Typography>
                    <Typography className={classes.navLeft}></Typography>
                    <NotificationsIcon />
                    <img className={classes.smallImage} left src="media/user4.png" alt="" />
                </Toolbar>
            </AppBar>
          </>
    )
}







