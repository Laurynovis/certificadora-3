# React + Vite

banco de dados 
CREATE DATABASE sistema_eventos;

-- Tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL CHECK (tipo_usuario IN ('admin', 'comum'))
);

-- Tabela de eventos
CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    apresentador VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_evento DATE NOT NULL,
    hora_evento TIME NOT NULL,
    local VARCHAR(150) NOT NULL,
    criado_por INTEGER REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Tabela de inscrições (relação N:N entre usuários e eventos)
CREATE TABLE inscricoes (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    evento_id INTEGER REFERENCES eventos(id) ON DELETE CASCADE,
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, evento_id)
);

-- Popular --

-- Inserindo um admin
INSERT INTO usuarios (email, nome, senha, tipo_usuario)
VALUES
  ('admin1@example.com', 'Pedro Rocha', '123', 'admin'),
  ('admin2@example.com', 'Lucas Zuque', '123', 'admin'),
  ('admin3@example.com', 'Pedro Enzo', '123', 'admin'),
  ('admin4@example.com', 'Victor Calado', '123', 'admin');


-- Eventos --

INSERT INTO eventos (apresentador, descricao, data_evento, hora_evento, local, criado_por)
VALUES
  (
    'João Silva',
    'Palestra sobre inovação tecnológica e tendências para 2025.',
    '2025-07-15',
    '19:00',
    'Auditório Principal',
    1
  ),
  (
    'Maria Oliveira',
    'Workshop prático sobre estratégias eficazes de marketing digital.',
    '2025-08-01',
    '14:30',
    'Sala 204',
    2
  ),
  (
    'Carlos Pereira',
    'Seminário para discutir práticas sustentáveis nas empresas.',
    '2025-09-10',
    '09:00',
    'Sala de Conferências B',
    1
  ),
  (
    'Ana Costa',
    'Painel de discussão com empreendedores locais sobre inovação e startups.',
    '2025-10-05',
    '18:30',
    'Auditório Secundário',
    3
  );
