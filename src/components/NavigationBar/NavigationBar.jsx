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
          <li id='home' className={styles.item} style={homeStyle} onClick={menuClick}>
              Home
          </li>
          <li id='movies'  className={styles.item} style={moviesStyle} onClick={menuClick}>
              Movies
          </li>
        </ul>
      </nav>
    </header>
  )
}
