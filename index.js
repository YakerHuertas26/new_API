import express from "express";

// creo mi servidor de express
const newApp= express();

// defino el puerto
const puerto= 3000;

// ejecuto mi servidor
newApp.listen(puerto,()=>{
    console.log('hola desde el servidro');
})