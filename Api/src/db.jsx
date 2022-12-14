const { Pool } = require('pg')
const { db } = require ('./config.jsx')

const pool = new Pool({
    user: db.user,
    password: db.pass,
    host: db.host,
    port: db.port,
    database: db.database
})

module.exports = pool;