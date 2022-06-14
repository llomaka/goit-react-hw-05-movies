import { useState, useCallback } from 'react';

export default function useModal() {
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
