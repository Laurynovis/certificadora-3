import { pool } from '../db.js';

export const criarEvento = async (req, res) => {
  const { apresentador, descricao, data_evento, hora_evento, local, criado_por } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO eventos (apresentador, descricao, data_evento, hora_evento, local, criado_por)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [apresentador, descricao, data_evento, hora_evento, local, criado_por]
    );
    res.status(201).json({ evento: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar evento', details: err.message });
  }
};

export const listarEventos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM eventos ORDER BY data_evento, hora_evento');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar eventos', details: err.message });
  }
};
