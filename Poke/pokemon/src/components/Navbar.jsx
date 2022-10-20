import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/estilos.css'
export default function Navbar() {

 
  return (
    <Box sx = {{flexGrow: 1}}>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <Link to = '/'>
              <img className='logo'
                  src= {require(`../images/logo3.png`)}
                  alt='Logo'
              />
            </Link>
            <Typography className='about-contenedor' variant='h6' sx = {{flexGrow: 1}}>
                <Link className='about' to = '/about' variant='contained' style={{ textDecoration: "none", color: "#2A9EEE"}}>About me </Link>
                <Link className='about' to = '/contact' variant='contained' style={{ textDecoration: "none", color: "#2A9EEE"}}> Contact</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
