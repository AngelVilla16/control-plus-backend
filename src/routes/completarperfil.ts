import {Router} from 'express';
import { actualizarPerfil } from '../controllers/updatePerfil';

const router = Router();

router.patch('/actualizar-perfil', actualizarPerfil);

export default router;