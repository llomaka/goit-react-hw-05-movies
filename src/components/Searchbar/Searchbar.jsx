import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSearchClick }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => (
    searchParams.get('query') ? searchParams.get('query') : ''
  ));

  const onChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') return toast.warning('Enter search query text!');
    onSearchClick(searchQuery);
  };

  return (
    <div className={styles.overlay}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <button type='submit' className={styles.button}>
          <span className={styles.label}>Search</span>
        </button>
        <input
          className={styles.input}
          type='text'
          name='searchQuery'
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
          onChange={onChange}
          value={searchQuery}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};
