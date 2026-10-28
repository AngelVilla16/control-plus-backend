import { Router } from 'express';
import { RegistrarGlucosa } from '../controllers/MedicionesController';

const router = Router();

router.post('/registrar-glucosa', RegistrarGlucosa);

export default router;
