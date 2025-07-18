import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import testImage from '../../assets/images/woman_speaker.png';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/eventos')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Erro ao carregar eventos:', error);
        alert('Erro ao carregar eventos');
      });
  }, []);

  const userId = localStorage.getItem('userId');

  const handleInscrever = async (eventoId) => {
    if (!userId) {
      alert('Você precisa estar logado para se inscrever.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/inscricoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario_id: userId,
          evento_id: eventoId
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Erro ao se inscrever');
        return;
      }

      alert('Inscrição realizada com sucesso!');
    } catch (error) {
      console.error('Erro ao inscrever:', error);
      alert('Erro ao se inscrever no evento');
    }
  };


  return (
    <>
      <h1>Eventos</h1>
      <div className={styles.cardsContainer}>
        {events.map(event => (
          <div className={styles.card} key={event.id}>
            <img
              src={testImage}
              alt={event.descricao}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{event.apresentador}</h3>
              <p className={styles.cardDescription}>{event.descricao}</p>
              <p className={styles.cardDate}>
                {new Date(event.data_evento).toLocaleDateString('pt-BR')} às {event.hora_evento.slice(0, 5)}
              </p>
              <p className={styles.cardLocation}>{event.local}</p>
              <button className={styles.cardButton} onClick={() => handleInscrever(event.id)}>
                Inscrever-se
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
