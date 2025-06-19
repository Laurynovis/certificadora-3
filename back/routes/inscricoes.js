import express from 'express';
import { inscreverUsuario, listarInscritos, listarTodasInscricoes } from '../controllers/inscricoesController.js';

const router = express.Router();

router.post('/', inscreverUsuario);
router.get('/evento/:id', listarInscritos);
router.get('/', listarTodasInscricoes);

export default router;
