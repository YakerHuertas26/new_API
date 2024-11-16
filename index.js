import express from 'express';
import clienteRouter from './src/routes/ClienteRoutes.js';
import consultaRouter from './src/routes/consultasRoutes.js';

// creo el servidor app
const app= express();


// puerto
const puerto= 3000;


// middlewares para que entienda los tipo Json
app.use(express.json());
// Rutas cliente
app.use(clienteRouter);

// ruta de consulta
app.use(consultaRouter)

// escuchar al servidor 
app.listen(puerto,()=>{
    console.log('hello from the server');
    
})