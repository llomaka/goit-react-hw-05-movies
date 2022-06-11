import { useState } from 'react';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState('home');
  const menuClick = event => {
    event.preventDefault();
    setActiveMenu(event.target.id);
  };
  const homeStyle = { color: activeMenu === 'home' ? '#FD8A2A' : null};
  const moviesStyle = {color: activeMenu === 'movies' ? '#FD8A2A' : null};
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a href="#" id='home' className={styles.link} style={homeStyle} onClick={menuClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#" id='movies'  className={styles.link} style={moviesStyle} onClick={menuClick}>
              Movies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
