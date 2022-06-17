import MovieCastItem from 'components/CastItem';
import Notification from 'components/Notification';
import Loader from 'components/Loader';
import useFetchCast from 'hooks/useFetchCast';
import styles from './Cast.module.css';

export default function Cast() {
  const { cast, error, isLoading } = useFetchCast();
  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification text={`Something went wrong. Error message: ${error}.`} />}
      {cast.length === 0 && <Notification text={'No cast available at this time.'} />}
      {cast.length > 0 && (<ul className={styles.list}>
        {cast.map(actor => (
          <li
            key={actor.id}
            className={styles.item}
          >
            <MovieCastItem {...actor} />
          </li>
        ))}
      </ul>)}
    </>
  );
}
