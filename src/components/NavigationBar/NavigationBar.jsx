import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as TmdbLogo } from './moviedblogo.svg';
import Container from 'components/Container';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            <NavLink to='/' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Home</NavLink>
            <NavLink to='/movies' className={({ isActive }) => isActive ? styles.orange : styles.blue}>Movies</NavLink>
          </nav>
          <a className={styles.link} href='https://www.themoviedb.org/' target='_blank' rel='noreferrer noopener nofollow'>
            <TmdbLogo />
          </a>
        </div>
      </Container>
    </header>
  );
}
