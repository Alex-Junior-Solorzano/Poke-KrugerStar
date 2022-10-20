const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const path = require('path')

const pokeRoutes = require('./routes/poke.routes.jsx') 
//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition : {
        openapi:"3.0.0",
        info: {
            title: "Poke-API",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:4001"
            }
        ]
    },
    apis:[`${path.join(__dirname, "./routes/*.jsx")}`]
}

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.use(pokeRoutes)

app.use((err,req,res,next) => {
    return res.json({
        message:err.message
    })
})

app.listen(4001)
console.log("Puerto: 4001")