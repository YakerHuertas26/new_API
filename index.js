import express from 'express';
import router from './routes/rutas.js';

// creo el servidor app
const app= express();


// puerto
const puerto= 3000;


// Rutas
app.use('/',router);

// escuchar al servidor 
app.listen(puerto,()=>{
    console.log('hello from the server');
    
})