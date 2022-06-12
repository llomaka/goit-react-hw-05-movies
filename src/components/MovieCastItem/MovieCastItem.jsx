import empty_picture from './no-image.svg';
import styles from './MovieCastItem.module.css';

export default function MovieCastItem({ id, character, name, profile_path }) {
  return (
      <>
        <img
          className={styles.image}
          src={profile_path ? `https://image.tmdb.org/t/p/w185${profile_path}` : empty_picture}
          alt={`${name}`}
          loading="lazy"
        />
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.character}><span className={styles.caption}>Character:</span> {character}</p>
      </>
  );
}
