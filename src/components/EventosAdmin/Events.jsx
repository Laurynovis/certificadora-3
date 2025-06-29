import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import testImage from '../../assets/images/woman_speaker.png';

function Home() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [inscritos, setInscritos] = useState([]);
  
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

  const fetchInscritos = async (eventoId) => {
  if (selectedEventId === eventoId) {
    setSelectedEventId(null);
    setInscritos([]);
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/api/inscricoes/evento/${eventoId}`);
    const data = await res.json();
    setInscritos(data);
    setSelectedEventId(eventoId);
  } catch (error) {
    console.error('Erro ao carregar inscritos:', error);
    alert('Erro ao carregar inscritos');
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
              <button className={styles.cardButton} onClick={() => fetchInscritos(event.id)}>
                Detalhes
              </button>
            </div>
            {selectedEventId === event.id && (
                <div className={styles.inscritosList}>
                  <h4>Inscritos:</h4>
                  {inscritos.length > 0 ? (
                    <ul>
                      {inscritos.map(inscrito => (
                        <li key={inscrito.id}>
                          {inscrito.nome} - {inscrito.email}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Nenhum inscrito encontrado.</p>
                  )}
                </div>
              )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
