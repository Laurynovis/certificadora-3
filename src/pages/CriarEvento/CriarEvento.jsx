import React, { useState } from 'react';
import './CriarEvento.css';

const CriarEvento = () => {
  const [apresentador, setApresentador] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataHoraFinal = data && hora ? `${data}T${hora}` : '';
    
    console.log({
      apresentador,
      conteudo,
      dataHora: dataHoraFinal,
      local,
    });

    setApresentador('');
    setConteudo('');
    setData('');
    setHora('');
    setLocal('');
  };

  return (
    <div className="container-criar-evento">
      <form className="card-criar-evento" onSubmit={handleSubmit}>
        <h2>Criar Novo Evento</h2>

        <label>Apresentador:</label>
        <input
          type="text"
          value={apresentador}
          onChange={(e) => setApresentador(e.target.value)}
          placeholder="Nome do apresentador"
        />

        <label>Conteúdo do Evento:</label>
        <textarea
          rows="4"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Descrição do evento"
          spellCheck="false"
        />

        <div className="data-hora-box">
          <label>Data e Hora:</label>
          <div className="data-hora-flex">
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>

        <label>Local:</label>
        <input
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Local do evento"
        />

        <button type="submit" className="botao-criar">
          Criar Evento
        </button>
      </form>
    </div>
  );
};

export default CriarEvento;