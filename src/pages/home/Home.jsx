import { useState } from 'react'
import styles from './styles.module.css'
import Events from '../../components/Events/Events'
import CreateEvent from '../../components/CriarEvento/CriarEvento'
import MyEvents from '../../components/MeusEventos/Events'
import EventsAdmin from '../../components/EventosAdmin/Events'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [selectedOption, setSelectedOption] = useState('Events')
  const navigate = useNavigate();

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
            className={`${styles.sidebarItem} ${selectedOption === 'MyEvents' ? styles.active : ''}`}
            onClick={() => setSelectedOption('MyEvents')}
          >
            Meus Eventos
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'EventsCreate' ? styles.active : ''}`}
            onClick={() => setSelectedOption('EventsCreate')}
          >
            Criar Evento (admin)
          </li>
          <li
            className={`${styles.sidebarItem} ${selectedOption === 'EventsAdmin' ? styles.active : ''}`}
            onClick={() => setSelectedOption('EventsAdmin')}
          >
            Eventos (admin)
          </li>
          <li
            className={`${styles.sidebarItem} ${styles.logoutItem}`}
            onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
            
          >
            Sair
          </li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        {selectedOption === 'Events' && <Events />}
        {selectedOption === 'MyEvents' && <MyEvents />}
        {selectedOption === 'EventsCreate' && <CreateEvent />}
        {selectedOption === 'EventsAdmin' && <EventsAdmin />}
      </div>
    </div>
  )
}

export default Home
