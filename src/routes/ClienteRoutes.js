import {Router} from 'express';
import { clienteID, deleteCliente, getCliente, postCliente, putCliente } from '../controller/clienteController.js';


const router = Router();

router.get('/cliente', getCliente)

// cliente por id
router.get('/cliente/:id', clienteID);

router.post('/cliente', postCliente)

router.put('/cliente', putCliente )

router.delete('/cliente/:id', deleteCliente)


export default router;