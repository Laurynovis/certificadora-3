# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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
VALUES ('Admin 1', 'admin@email.com', 'senha_criptografada_aqui', 'admin');

-- Inserindo um usuário comum
INSERT INTO usuarios (nome, email, senha, tipo_usuario)
VALUES ('João Silva', 'joao@email.com', 'senha_criptografada_aqui', 'comum');

-- Inserindo um evento criado pelo admin
INSERT INTO eventos (apresentador, descricao, data_evento, hora_evento, local, criado_por)
VALUES ('Prof. Maria', 'Palestra sobre IA', '2025-07-01', '19:00', 'Auditório Central', 1);

-- João se inscrevendo no evento
INSERT INTO inscricoes (usuario_id, evento_id)
VALUES (2, 1);
