# 🎓 Sistema de Cadastro e Inscrição de Palestras

Projeto desenvolvido para a disciplina **EC47G - Certificadora de Competência 3 - C81 (2025_01)** com o objetivo de criar um sistema web para **cadastro, gerenciamento e inscrição de usuários em palestras**.

---

## 👥 Desenvolvedores

- Pedro Henrique da Rocha — RA 2346575
- Victor Ribeiro Calado RA 2313553
- pedro enzo laurynovis gomes - 2346818
- Lucas Vinicius Zuque de Lima RA 2268710
---

## 📌 Objetivo

Este sistema permite que usuários:
- Visualizem uma lista de palestras disponíveis
- Se inscrevam nas palestras desejadas
- Administrem eventos (no caso de usuários do tipo `Admin`)

Usuários administradores têm permissões adicionais, como:
- Criar novas palestras
- Visualizar todos os inscritos

---

## 🚀 Tecnologias Utilizadas

### Front-end
- **React.js**
- **React Router DOM**
- **CSS Modules**
- **Vite**

### Back-end
- **Node.js**
- **Express**
- **PostgreSQL**
- **pg (node-postgres)**

---

## 🧑‍💻 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (v18+)
- PostgreSQL instalado e configurado
- Yarn ou NPM instalado

### 🔧 Configuração do Banco de Dados

1. Crie o banco de dados:

```sql
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

2. Execute os scripts SQL para criar as tabelas (usuários, eventos, inscrições).  
   *(Você pode rodar os `INSERT` com dados de exemplo fornecidos via pgAdmin.)*

-- Popular (Somente o Admin é obrigatorio) --

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

```

### 🔄 Instalar dependências

#### Back-end:

```bash
cd backend
npm install
npm run dev
```

#### Front-end:

```bash
cd frontend
npm install
npm run dev
```

O front estará rodando em `http://localhost:5173` e o back-end em `http://localhost:3000`.

---

## 🧠 Funcionalidades principais

- ✅ Login e Cadastro
- ✅ Cadastro de eventos (admin)
- ✅ Inscrição de usuários em eventos
- ✅ Listagem dos inscritos em cada evento
- ✅ Controle de acesso por tipo de usuário
