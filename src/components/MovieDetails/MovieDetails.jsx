import emptyPoster from './no-poster.svg';
import styles from './MovieDetails.module.css';

export default function MovieDetails({ id, poster_path, title, release_date, vote_average, overview, genres }) {
  const genre = genres.length > 0 ? genres.map(genre => genre.name).join(', ') : 'No Genres Available';
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w185${poster_path}` : emptyPoster}
          alt={`${title} Poster`}
          loading="lazy"
        />
        <div className={styles.caption}>
          <h2 className={styles.title}>{title} ({release_date ? release_date.slice(0, 4) : 'No Release Year Available'})</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'No Overview Available'}</p>
          <h3>Genres</h3>
          <p>{genre}</p>
        </div>
      </div>
      <div className={styles.aside}>
        <h2 className={styles.aside_title}>Additional information</h2>
        <ul className={styles.list}>
          <li className={styles.item}>Cast</li>
          <li className={styles.item}>Reviews</li>
        </ul>
      </div>
    </section>
  );
}

// https://image.tmdb.org/t/p/w342
//  const markup = `<div class="film__card" data-index-number="${film.id}">
//       <img
//         srcset="https://image.tmdb.org/t/p/w342${film.poster_path} 342w, https://image.tmdb.org/t/p/w500${film.poster_path} 500w"
//         sizes="(max-width: 1023px) 342px, 500px"
//         src="https://image.tmdb.org/t/p/w500${film.poster_path}"
//         alt="${film.title} Poster"
//         loading="lazy"
//       />
//     <div class="film__caption">
//       <h2 class="film__title">${film.title}</h2>
//         <ul class="film__list">
//           <li class="film__item">
//             <p class="film__item-caption">Vote / Votes</p>
//             <p class="film__rating"><span class="film__vote">${film.vote_average}</span> / <span class="film__votes">${film.vote_count}</span></p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Popularity</p>
//             <p class="film__popularity">${popularity}</p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Original Title</p>
//             <p class="film__original-title">${film.original_title}</p>
//           </li>
//           <li class="film__item">
//             <p class="film__item-caption">Genre</p>
//             <p class="film__genre">${genre}</p>
//           </li>
//         </ul>
//         <p class="film__about-caption">About</p>
//         <p class="film__about">${film.overview}</p>
//       </div>
//     </div>`;
