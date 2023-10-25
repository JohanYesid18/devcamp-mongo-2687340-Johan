const mongoose = require('mongoose')
const colors = require('colors')

//funcion para conexion a base de datos
const connectDB = async() =>{
    //crear el objeto de conexion
    const conn = await mongoose.connect( process.env.MONGO_URL )
    console.log(`mongodb conectado en el host: ${conn.connection.host }`.bgWhite.black)
}

module.exports = connectDB
