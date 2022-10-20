import React, { useEffect, useState} from 'react'
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Navbar from './Navbar.jsx'

export default function TaskList() {

  const [pokes, setPokes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

  const loadPokes = async () => {
    const res = await fetch(`http://localhost:4001/pokes`)
    const data = await res.json();
    setPokes(data)
  };

  const handleInputChange = (event) => {
    setBusqueda(event.target.value)
    
  }
  
    let resultt = []
    if(!busqueda){
      resultt = pokes
    }else{
      resultt = pokes.filter((dato) =>
        dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase())
      );
    }

  useEffect(() =>{
    loadPokes()
  },[])

  return (
    <>
        <Navbar/>
        <div align = 'right'>
          <br/>
        <Paper  component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }} > 
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Pokemon"
            
            inputProps={{ 'aria-label': 'Buscar Pokemon' }}
            onChange={handleInputChange}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
            <SearchIcon />
          </IconButton>
        </Paper>
        </div>
        <br/>
        <Typography align="center" variant='h3' >Lista de Pokemones</Typography>
        <br/>
        <br/>
        <Grid container spacing={4} alignItems='center' justifyContent='center'>
            {
                resultt.map((pokes) =>(
                    
                    <Card style={{
                        marginBottom: ".7rem",
                        backgroundColor: "#1e272e",
                        marginLeft: "5px",
                        width:"300px",
                        height: "170px",
                        justifyContent: "center",
                    }}
                    key= {pokes.id}>
                    <CardContent style={{
                        
                        justifyContent: "center",
                        display: "flex",
                    }}>
                    <img className = "pokes" src= {require(`../images/${pokes.imagen}.png`)} alt = "" />
                    <div style={{color:"white"}}>
                        
                        <Typography color = 'white'># {pokes.id}</Typography>
                        <Typography color = 'white'>Nombre: {pokes.nombre}</Typography>
                        <Typography color = 'white'>Tipo: {pokes.tipo}</Typography>
                    
                        <Button 
                            variant='contained' 
                            color='success' 
                            style= {{margin: ".5rem"}}
                            onClick = {() => navigate(`/detalles/${pokes.id}`)}
                        >Ver mas
                        </Button>
                    </div>
                    </CardContent>
                </Card>
                ))
            }
        </Grid>
    </>
  )
}
