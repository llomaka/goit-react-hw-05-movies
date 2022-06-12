import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/goit-react-hw-05-movies/' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Home</NavLink>
        <NavLink to='/goit-react-hw-05-movies/movies' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Movies</NavLink>
      </nav>
    </header>
  )
}
