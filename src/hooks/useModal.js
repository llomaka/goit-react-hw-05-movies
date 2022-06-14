import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function useModal(src, alt) {
  const [posterPath, setPosterPath] = useState(null);
  const [altCaption, setAltCaption] = useState(null);

  const closeModal = useCallback(()=> {
    setPosterPath(null);
    setAltCaption(null);
  }, []);

  function selectImage(src, alt) {
    setPosterPath(src);
    setAltCaption(alt);
  };

  return { posterPath, altCaption, closeModal, selectImage };
}

useModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
