import { Router } from 'express';
import { RegistrarGlucosa } from '../controllers/MedicionesController';
import { RegistrarPresion } from '../controllers/MedicionesController';
const router = Router();

router.post('/registrar-glucosa', RegistrarGlucosa);
router.post('/registrar-presion', RegistrarPresion);

export default router;
