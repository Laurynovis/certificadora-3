import { pool } from '../db.js';

export const inscreverUsuario = async (req, res) => {
  const { usuario_id, evento_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO inscricoes (usuario_id, evento_id) VALUES ($1, $2) RETURNING *',
      [usuario_id, evento_id]
    );
    res.status(201).json({ inscricao: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao inscrever usuário', details: err.message });
  }
};

export const listarInscritos = async (req, res) => {
  const eventoId = req.params.id;

  try {
    const result = await pool.query(
      `SELECT u.id, u.nome, u.email
       FROM inscricoes i
       JOIN usuarios u ON i.usuario_id = u.id
       WHERE i.evento_id = $1`,
      [eventoId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar inscritos', details: err.message });
  }
};

export const listarTodasInscricoes = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT i.id, u.nome AS usuario_nome, u.email AS usuario_email,
             e.apresentador, e.descricao, e.data_evento, e.hora_evento, e.local
      FROM inscricoes i
      JOIN usuarios u ON i.usuario_id = u.id
      JOIN eventos e ON i.evento_id = e.id
      ORDER BY i.id DESC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar inscrições', details: err.message });
  }
};
