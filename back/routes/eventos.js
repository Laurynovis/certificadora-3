import express from 'express';
import { criarEvento, listarEventos } from '../controllers/eventosController.js';

const router = express.Router();

router.post('/', criarEvento);
router.get('/', listarEventos);

export default router;
