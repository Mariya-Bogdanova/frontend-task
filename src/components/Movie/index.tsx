import styles from './movie.module.scss';
import { IMovie } from '../../models';

interface IPropsMovie {
  movie: IMovie;
}

function Movie({ movie: { country, genres, length, min_age, num_seasons, title, year } }: IPropsMovie) {
  return (
    <>
      <div className={styles.img}></div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>
          <div>{country}</div>
          <div>{year}</div>
          <div>{length}</div>
          <div>{num_seasons}</div>
          <div>{min_age}</div>
        </div>
        <div className={styles.genres}>{genres.join(',')}</div>
      </div>
    </>
  );
}

export default Movie;
