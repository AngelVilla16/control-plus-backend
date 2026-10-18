import {Router} from 'express';
import {registro} from '../controllers/authRegistro';

const router = Router();

router.post('/registro', registro);

export default router;