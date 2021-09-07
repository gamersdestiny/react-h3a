import React from 'react'
import { PatientList } from './PatientList';
import { Drawer, List, CssBaseline, makeStyles, Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const drawerWidth = 250;

const useStyles = makeStyles((theme) =>({
    root: {
      display: 'flex',
    },
    drawer:{
      width: drawerWidth,
      flexShrink: 0,
      background: '#e8f5fe',
    },
    ListContainer:{
      padding: '4px'
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: '#fff',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: 'auto'
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
    },
    inputRoot: {
      color: 'inherit',
      background: '#fff',
    },
    inputInput: {
      background: '#fff',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0.5)}px)`,
      transition: theme.transitions.create('width'),
      width: '24ch',
      [theme.breakpoints.down('sm')]: {
        width: '24ch',
      },
    },
}))

export const Sidebar = (props, { onSelect }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
                <Drawer className={classes.drawer} classes={{ paper: classes.drawer}} variant="permanent">
                  <Toolbar />
                  <List className={classes.List} >
                      <div className={classes.ListContainer}>
                        <Typography variant='h6' className="side-heading">Patients</Typography>
                        <div className={classes.search}>
                          <div className={classes.searchIcon}>
                          </div>
                          <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                          />
                            <SearchIcon />
                          </div>
                        {/* <div className="search">
                            <input type="text" className="search-patient" placeholder='search for...' />
                            <i className="icon"><FaSistrix /></i>
                        </div> */}
                        <div className="patient-list">
                            <PatientList patient={props} onSelect={onSelect} />
                        </div>
                      </div>
                  </List>
            </Drawer>
        </div>
    )
}
