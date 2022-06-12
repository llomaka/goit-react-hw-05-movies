import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink exact to='/' className={styles.link} activeClassName={styles.active_link}>Home</NavLink>
        <NavLink to='/movies'  className={styles.link} activeClassName={styles.active_link}>Movies</NavLink>
      </nav>
    </header>
  )
}
