import PropTypes from 'prop-types';
import empty_picture from './no-image.svg';
import { RemoveScroll } from 'react-remove-scroll';
import Modal from 'components/Modal';
import useModal from '../../hooks/useModal';
import styles from './MovieCastItem.module.css';

export default function MovieCastItem({ id, character, name, profile_path }) {
  const { posterPath, altCaption, closeModal, selectImage } = useModal(profile_path, name);

  return (
    <>
      <img
        className={styles.image}
        src={profile_path ? `https://image.tmdb.org/t/p/w185${profile_path}` : empty_picture}
        alt={`${name}`}
        loading="lazy"
        onClick={() => selectImage(`https://image.tmdb.org/t/p/original${profile_path}`, name)}
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.character}><span className={styles.caption}>Character:</span> {character}</p>
      {posterPath && profile_path && <RemoveScroll>
        <Modal
          posterPath={posterPath}
          tags={altCaption}
          closeModal={closeModal}
        />
      </RemoveScroll>}
    </>
  );
}

MovieCastItem.propTypes = {
  id: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
