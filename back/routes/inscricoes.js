import express from 'express';
import { inscreverUsuario, listarInscritos, listarTodasInscricoes } from '../controllers/inscricoesController.js';
import { listarEventosInscritos } from '../controllers/listarEventosInscritos.js';
const router = express.Router();

router.post('/', inscreverUsuario);
router.get('/evento/:id', listarInscritos);
router.get('/', listarTodasInscricoes);
router.get('/:usuario_id', listarEventosInscritos);

export default router;
