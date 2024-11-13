import { Router } from "express";

import { pruebaBD } from "../controller/consultasController.js";

const router= Router();

router.get('/ping',pruebaBD)

export default router;