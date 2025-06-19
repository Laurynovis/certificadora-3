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
    <>
      <h1>{selectedOption}</h1>
      <div className={styles.cardsContainer}>
        {events.map(event => (
          <div className={styles.card} key={event.id}>
            <img src={event.image} alt={event.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardDescription}>{event.description}</p>
              <button className={styles.cardButton}>Inscrever-se</button>
              <button className={styles.cardButton}>Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
