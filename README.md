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

popular 

-- Inserindo um admin
INSERT INTO usuarios (nome, email, senha, tipo_usuario)
VALUES ('Admin 1', 'admin@email.com', '123', 'admin');
