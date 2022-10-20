import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar.jsx'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const navigate = useNavigate()
  return (

    <div>
      <Navbar />
      <br /><br />
      <Typography align="center" variant='h3' >Contactenos </Typography>
      <br /> <br />
      <Grid container spacing={4} alignItems='center' justifyContent='center'>
        <Card style={{
          marginBottom: ".7rem",
          backgroundColor: "#1e272e",
          marginLeft: "5px",
          width: "300px",
          height: "230px",
          justifyContent: "center",
          alignContent: "center",
        }}
          key='1'>
          <CardContent style={{

            justifyContent: "center",
            display: "flex",
          }}>
            <div style={{ margin: '5px 5px 5px 10px', alignContent: 'center' }}>
              <ContactPhoneIcon sx={{ fontSize: 100, color: 'white' }} />
              <Typography color='white'>Numero de telefono:</Typography>
              <Typography color='white'>(+593)987654321</Typography>
            </div>
          </CardContent>
        </Card><Card style={{
          marginBottom: ".7rem",
          backgroundColor: "#1e272e",
          marginLeft: "5px",
          width: "300px",
          height: "230px",
          justifyContent: "center",
          alignContent: "center",
        }}
          key='2'>
          <CardContent style={{

            justifyContent: "center",
            display: "flex",
          }}>
            <div style={{ margin: '5px 5px 5px 5px', justifyContent: "center" }}>
              <EmailIcon sx={{ fontSize: 100, color: 'white' }} />
              <Typography color='white'>e-mail:</Typography>
              <Typography color='white'>alex@hotmail.com</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <div align='center'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/')}
        >
          Volver
        </Button>
      </div>
    </div>
  )
}

export default Contact