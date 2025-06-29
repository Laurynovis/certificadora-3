import { pool } from '../db.js';

export const listarEventosInscritos = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const result = await pool.query(
      `SELECT e.*
       FROM eventos e
       JOIN inscricoes i ON e.id = i.evento_id
       WHERE i.usuario_id = $1
       ORDER BY e.data_evento, e.hora_evento`,
      [usuario_id]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar eventos inscritos', details: err.message });
  }
};
