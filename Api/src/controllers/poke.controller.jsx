const pool = require('../db.jsx')

const getAllPoke = async (req,res,next) => {
    try {
        //throw new Error ('Algo salio mal')
        const allPoke = await pool.query('SELECT * FROM poke');
        //console.log(allTask);
        res.json(allPoke.rows);
    } catch (error) {
        next(error);
    }
}

const getPoke = async (req,res,next) => {
    try {
        const { id } = req.params
        const poke = await pool.query('SELECT * FROM poke WHERE id = $1', [id]);
        if (poke.rows.length === 0) 
            return res.status(404).json ({
                message: 'Pokemon no encontrado'
        });
        res.json(poke.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllPoke,
    getPoke
}