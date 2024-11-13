import express from 'express';
import { conexion } from '../conf/dataBase.js';

const router = express.Router();

router.get('/cliente', (req, res) => {res.send('hello fron the client')})

router.post('/cliente', (req, res) => {res.send('create a client')})

router.put('/cliente', (req, res) => {res.send('edit a client')})

router.delete('/cliente', (req, res) => {res.send('delete a client')})

router.get('/ping',async (req, res) => {
    // consulta a mi base de satos
    const resultado= await conexion.query('select 1+5 as result');
    res.json(resultado)
})

export default router;