import React, { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Navbar from './Navbar.jsx';

const Detalles = () => {

    const [poke, setPoke] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        imagen: "carga",
        tipo: "",
        evolucion: "",
        peso: "",
        altura: "",
    });
    const navigate = useNavigate()
    const params = useParams();

    const loadPoke = async (id) => {
        const res = await fetch(`http://localhost:4001/pokes/${id}`)
        const data = await res.json();
        setPoke({
            id: data.id,
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen,
            tipo: data.tipo,
            evolucion: data.evolucion,
            peso: data.peso,
            altura: data.altura,
        })
    }

    useEffect(() => {
        if (params.id) {
            loadPoke(params.id)
        }
    }, [params.id])

    return (
        <>
            <Navbar />
            <Grid container direction='column' alignItems='center' justifyContent='center'>
                <Grid item xs={3}>
                    <Card sx={{ mt: 5 }} style={{
                        background: '#1e272e',
                        padding: '1rem'
                    }}>

                        <CardContent>

                            <div align='center'>
                                <Typography color='white'># {poke.id}</Typography>
                                <img style={{ height: '200px', width: '200px' }} src={require(`../images/${poke.imagen}.png`)} alt="" />
                            </div>
                            <Typography color='white'>Nombre: {poke.nombre}</Typography>
                            <Typography color='white'>Tipo: {poke.tipo}</Typography>
                            <Typography color='white'>Descripcion: {poke.descripcion}</Typography>
                            <Typography color='white'>Evolucion: {poke.evolucion}</Typography>
                            <Typography color='white'>Peso: {poke.peso}</Typography>
                            <Typography color='white'>Altura: {poke.altura}</Typography>
                            <div align='right'>
                                <Button

                                    variant='contained'
                                    color='primary'
                                    onClick={() => navigate('/')}
                                >
                                    Volver
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Detalles