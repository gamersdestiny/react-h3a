import React from 'react'

import { Typography, makeStyles, Toolbar, Button } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'surgeryType',
    headerName: 'Surgery Type',
    width: 150,
    editable: false,
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 150,
    editable: false,
  },
  {
    field: 'anesthesiaType',
    headerName: 'Anesthesia Type',
    width: 150,
    editable: false,
  },
  {
    field: 'surgicalComplications',
    headerName: 'Surgical Complications',
    width: 150,
    editable: false,
  },
  {
    field: 'anesthesiaComplications',
    headerName: 'Anesthesia Complications(nausea, vomitting, difficult intubation)',
    width: 150,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    surgeryType: 'Shoulder Reconstruciton',
    Date: 'January 2008',
    anesthesiaType: 'Genral "Breathing Tube"',
    surgicalComplications: 'No',
    anesthesiaComplications: 'No'
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  mainScreenHead: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flexGrow: 1
  },
  image: {
    width: '6rem',
    height: '6rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '.25em',
    
  },
  detailsContainer: {
    marginLeft: '.5em',

  },
  listContainer:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '2rem',
    marginRight: '1rem',
    '&>*':{
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    },

  },
  listTitle:{
    minWidth: '8rem',
    marginRight:'1em'
  },
  mainContainer:{
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  downMenu:{
    display: 'flex',
    marginTop: '2em',
    background: 'white',
    width: '100%',
  },
  infoCard:{
    marginLeft: '1em',
    marginTop: '1em',
    maxWidth: '500px'
  },
  cardDetilTitle:{
    background: 'lightBlue',
    paddingLeft: '.5em'
  },
  downMenuTitles:{
    maxHeight: '5em',
    padding: '.5em',
    textAlign: 'center',
  },
  active:{
    border: '1px solid #dbdbdb',
    borderBottom: 'none'
  },
  button: {
    marginTop: '1em'
  },
  title:{
    paddingLeft: ".5em",
  },
  listItem:{
    display: 'flex'
  },
  doctorDetails:{
    position: 'relative'
  },
  surgery:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3rem',
  },
  yes: {
    width: '3rem',
    height: '3rem',
    background: 'green',
    color: 'white',
    borderRadius: '50%',
    position: 'relative'
  },
  no: {
    width: '3rem',
    height: '3rem',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    position: 'relative'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

export const MainScreen = ({patient}) => {
  
  const classes = useStyles()

    return (
        <div className={classes.root}>
          <Toolbar />
        {patient.map((user, index) => {
          return <div key={index}>
          <div className={classes.mainScreenHead} width="100%">
            <Typography className={classes.title} >Patient Information</Typography>
            <Typography>Last updated {user.lastUpdated} <MoreHorizIcon align="center"/></Typography>
          </div>
          <div className={classes.container}>
            <img className={classes.image} src={user.image} alt="" />
              <div className={classes.detailsContainer}>
                <Typography variant="h6">{user.patientName}</Typography>
                   <div className={classes.mainContainer}>
                    <div className={classes.listContainer} >
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Phone</Typography>
                        <Typography variant="p"><b>{user.phone}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Surgery Type</Typography>
                        <Typography variant="p"><b>{user.surgeryType}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Email</Typography>
                        <Typography variant="p"><b>{user.email}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Surgery Date</Typography>
                        <Typography variant="p"><b>{user.surgeryDate}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Gender</Typography>
                        <Typography variant="p"><b>{user.gender}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Height</Typography>
                        <Typography variant="p"><b>{user.height}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Age</Typography>
                        <Typography variant="p"><b>{user.age}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Weight</Typography>
                        <Typography variant="p"><b>{user.weight}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">BMI</Typography>
                        <Typography variant="p"><b>{user.BMI}</b></Typography>
                      </div>
                    
                    </div>
                    {/* doctor details */}
                    <div className={classes.doctorDetails}>
                      <div className={classes.listItem}>
                        <Typography className={classes.listTitle} variant="p">Anesthesiologist</Typography>
                        <Typography variant="p"><b>{user.anesthesiologist}</b></Typography>
                      </div>
                      <div className={classes.listItem}>
                          <Typography className={classes.listTitle} variant="p">Anesthesiologist Phone</Typography>
                          <Typography variant="p"><b>{user.anesthesiologistPhone}</b></Typography>
                        </div>
                      <div className={classes.listItem}>
                          <Typography className={classes.listTitle} variant="p">Anesthesiologist Email</Typography>
                          <Typography variant="p"><b>{user.anesthesiologistEmail}</b></Typography>
                        </div>
                    </div>



                    <div className={classes.surgery}>
                      <Typography>Surgery Clearance</Typography>
                      <div className={`${user.sugeryClearance ? classes.yes : classes.no} `}><Typography className={classes.center}>{user.sugeryClearance ? 'YES' : 'No'}</Typography></div>
                    </div>
                  </div>
              </div>
          </div>
          </div>
          })}
        <div className={classes.downMenu}>
          <Typography className={classes.downMenuTitles} >List of prior Surgeries</Typography>
          <Typography className={`${classes.downMenuTitles} ${classes.active}`} >List of Medical Diagnosis</Typography>
          <Typography className={classes.downMenuTitles} >List of Medications</Typography>
          <Typography className={classes.downMenuTitles} >Airway Evaluation</Typography>
          <Typography className={classes.downMenuTitles} >Anesthesia Clearance and Recomendations</Typography>
        </div>           
          <div className="">
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >First Time Surgery</Typography>
              <Typography>No</Typography>
            </div>
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >Family History of Surgical Complications?</Typography>
              <Typography>Yes</Typography>
            </div>
            <div className={classes.infoCard}>
              <Typography className={classes.cardDetilTitle} >If Yes, please provide more details</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore quibusdam nesciunt inventore, similique soluta optio at in amet, voluptates laudantium consequatur ipsum? Corporis nemo quaerat suscipit fuga magni beatae sapiente, odio nisi quibusdam officia tempore, odit unde quisquam!</Typography>
            </div>
          </div>
          <div className={classes.title}>
            <Typography  variant='h6'>Previous Surgeries</Typography>
              <div style={{ height: 200, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  disableSelectionOnClick
                />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
              >
                Add Surgery
              </Button>
            </div>
          </div>
        </div>
    )
}
