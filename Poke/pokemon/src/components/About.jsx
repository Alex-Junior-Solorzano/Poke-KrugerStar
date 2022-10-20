import React from 'react'
import { Button, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar.jsx'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <br /><br />
      <Typography align="center" variant='h3' >¿Quien soy yo? </Typography>
      <CardContent>
      <br />
        <div align='center' >
          <img style={{ height: '100px', width: '100px' }} src={require(`../images/foto.jpg`)} alt="" />
        <Typography style={{width: "400px", height: "120px"}} >Mi nombre es Alex Junior Solórzano Vélez y soy Ingeniero en Sistemas Informaticos graduado en la Universidad Técnica de Manabí.</Typography>
        </div>
        <div align='center'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/')}
          >
            Volver
          </Button>
        </div>
      </CardContent>
      <br /> <br />
    </div>
  )
}

export default About