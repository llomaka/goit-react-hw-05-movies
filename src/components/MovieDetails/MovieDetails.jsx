import { RemoveScroll } from 'react-remove-scroll';
import Modal from 'components/Modal';
import useModal from '../../hooks/useModal';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard';
import Notification from 'components/Notification';
import BackButton from 'components/BackButton';
import useFetchMovie from 'hooks/useFetchMovie';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movie, error, isLoading, isPrevPage } = useFetchMovie();
  const { posterPath, altCaption, closeModal, selectImage } = useModal();

  return (
    < section className={styles.section} >
      {isLoading && <Loader />}
      {error && <Notification text={`Something went wrong. Error message: ${error.message}.`} />}
      {isPrevPage > 0 && (<BackButton />)}
      {movie && (<MovieCard movie={movie} selectImage={selectImage} />)}
      {posterPath && movie.poster_path && <RemoveScroll>
        <Modal
          posterPath={posterPath}
          altCaption={altCaption}
          closeModal={closeModal}
        />
      </RemoveScroll>}
    </section >
  );
}
