import {Router} from 'express';
import { deleteCliente, getCliente, postCliente, putCliente } from '../controller/clienteController.js';


const router = Router();

router.get('/cliente', getCliente)

router.post('/cliente', postCliente)

router.put('/cliente', putCliente )

router.delete('/cliente', deleteCliente)


export default router;