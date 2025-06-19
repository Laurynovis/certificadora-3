import { useState } from 'react'
import styles from './styles.module.css'
import testImage from '../../assets/images/woman_speaker.png'
import Events from '../../components/Events/Events'
import CreateEvent from '../../components/CriarEvento/CriarEvento'

function Home() {
  const [selectedOption, setSelectedOption] = useState('Eventos')

  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Home</h2>
        <ul className={styles.sidebarMenu}>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'Events' ? styles.active : ''}`}
            onClick={() => setSelectedOption('Events')}
          >
            Eventos
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'EventsDetail' ? styles.active : ''}`}
            onClick={() => setSelectedOption('EventsDetail')}
          >
            Detalhe Eventos
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'EventsCreate' ? styles.active : ''}`}
            onClick={() => setSelectedOption('EventsCreate')}
          >
            Criar Evento (admin)
          </li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        {selectedOption === 'Events' && <Events />}
        {/* {selectedOption === 'EventsDetail' && <EventsDetail />} */}
        {selectedOption === 'EventsCreate' && <CreateEvent />}
      </div>

    </div>
  )
}

export default Home
