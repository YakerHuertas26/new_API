import {Router} from 'express';
import { clienteID, deleteCliente, getCliente, postCliente, putCliente } from '../controller/clienteController.js';


const router = Router();

router.get('/empleado', getCliente)

// cliente por id
router.get('/empleado/:id', clienteID);

router.post('/empleado', postCliente)

router.patch('/empleado/:id', putCliente )

router.delete('/cliente/:id', deleteCliente)


export default router;