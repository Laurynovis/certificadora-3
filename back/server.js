import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import eventosRoutes from './routes/eventos.js';
import inscricoesRoutes from './routes/inscricoes.js';

dotenv.config();

const app = express();

// Permitir requisições do frontend (exemplo para http://localhost:5173)
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/inscricoes', inscricoesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
