import { pool } from '../db.js';

export const register = async (req, res) => {
  const { email, nome, senha, tipo_usuario } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (email, nome, senha, tipo_usuario) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, nome, senha, tipo_usuario]
    );

    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao registrar usuário', details: err.message });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (result.rows.length === 0) 
      return res.status(401).json({ error: 'Usuário não encontrado' });

    const user = result.rows[0];

    if (senha !== user.senha)
      return res.status(401).json({ error: 'Senha inválida' });

    res.json({ user: { id: user.id, nome: user.nome, tipo_usuario: user.tipo_usuario } });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao fazer login', details: err.message });
  }
};
