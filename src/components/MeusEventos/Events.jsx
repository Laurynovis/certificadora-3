import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import testImage from '../../assets/images/woman_speaker.png';

function MeusEventos() {
  const [events, setMeusEventos] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetch(`http://localhost:3000/api/inscricoes/${userId}`)
      .then(res => res.json())
      .then(data => setMeusEventos(data))
      .catch(err => console.error('Erro ao buscar eventos inscritos:', err));
  }, [userId]);

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

export default MeusEventos;
