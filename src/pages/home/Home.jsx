import { useState } from 'react'
import styles from './styles.module.css'
import testImage from '../../assets/images/woman_speaker.png'

function Home() {
  const [selectedOption, setSelectedOption] = useState('Eventos')

  const events = [
  {
    id: 1,
    title: 'Palestra sobre Inovação',
    description: 'Descubra as novas tendências em inovação tecnológica.',
    image: testImage
  },
  {
    id: 2,
    title: 'Workshop de Oratória',
    description: 'Melhore sua comunicação em público com técnicas práticas.',
    image: testImage
  },
  {
    id: 3,
    title: 'Evento de Networking',
    description: 'Conheça pessoas da sua área e expanda seus contatos.',
    image: testImage
  },{
    id: 1,
    title: 'Palestra sobre Inovação',
    description: 'Descubra as novas tendências em inovação tecnológica.',
    image: testImage
  },
  {
    id: 2,
    title: 'Workshop de Oratória',
    description: 'Melhore sua comunicação em público com técnicas práticas.',
    image: testImage
  },
  {
    id: 3,
    title: 'Evento de Networking',
    description: 'Conheça pessoas da sua área e expanda seus contatos.',
    image: testImage
  },{
    id: 1,
    title: 'Palestra sobre Inovação',
    description: 'Descubra as novas tendências em inovação tecnológica.',
    image: testImage
  },
  {
    id: 2,
    title: 'Workshop de Oratória',
    description: 'Melhore sua comunicação em público com técnicas práticas.',
    image: testImage
  },
  {
    id: 3,
    title: 'Evento de Networking',
    description: 'Conheça pessoas da sua área e expanda seus contatos.',
    image: testImage
  },{
    id: 1,
    title: 'Palestra sobre Inovação',
    description: 'Descubra as novas tendências em inovação tecnológica.',
    image: testImage
  },
  {
    id: 2,
    title: 'Workshop de Oratória',
    description: 'Melhore sua comunicação em público com técnicas práticas.',
    image: testImage
  },
  {
    id: 3,
    title: 'Evento de Networking',
    description: 'Conheça pessoas da sua área e expanda seus contatos.',
    image: testImage
  }
]


  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Home</h2>
        <ul className={styles.sidebarMenu}>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'Eventos' ? styles.active : ''}`}
            onClick={() => setSelectedOption('Eventos')}
          >
            Eventos
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'Detalhe Eventos' ? styles.active : ''}`}
            onClick={() => setSelectedOption('Detalhe Eventos')}
          >
            Detalhe Eventos
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'Criar Evento' ? styles.active : ''}`}
            onClick={() => setSelectedOption('Criar Evento')}
          >
            Criar Evento (admin)
          </li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <h1>{selectedOption}</h1>
        <div className={styles.cardsContainer}>
          {events.map(event => (
            <div className={styles.card} key={event.id}>
              <img src={event.image} alt={event.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDescription}>{event.description}</p>
                <button className={styles.cardButton}>Inscrever-se</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
