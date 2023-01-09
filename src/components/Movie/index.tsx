import { IMovie } from '../../models';
import styles from './movie.module.scss';

interface IPropsMovie {
  movie: IMovie;
}

function Movie({ movie: { country, genres, length, min_age, num_seasons, title, year, poster } }: IPropsMovie) {
  return (
    <div className={styles.cardMovie}>
      <div className={styles.img}>
        <img src={`api/${poster}`} alt='picture' />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>
          <div>{country} </div>
          <div>{year}</div>
          <div>{length / 60} min</div>
          <div>{num_seasons} seasons</div>
          <div>{min_age}+</div>
        </div>
        <div className={styles.genres}>{genres.join(', ')}</div>
      </div>
    </div>
  );
}

export default Movie;
