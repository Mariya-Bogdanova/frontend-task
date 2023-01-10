import { IMovie } from '../../models';
import styles from './movie.module.scss';
import { ReactComponent as New } from '../../images/type=new.svg';
import { ReactComponent as MoreDetails } from '../../images/moreDetails.svg';
interface IPropsMovie {
  movie: IMovie;
}

function Movie({
  movie: { country, genres, length, min_age, num_seasons, title, year, poster, imdb_rate, is_new },
}: IPropsMovie) {
  return (
    <div className={styles.cardMovie}>
      <div className={styles.imgBox}>
        <img src={`api/${poster}`} alt='picture' />

        <div className={styles.btnOnIMG}>
          {is_new && <New className={styles.new} />}
          <div className={styles.greenButton}>
            IMDB &nbsp; <span>{imdb_rate}/10</span>
          </div>
        </div>
        <MoreDetails className={styles.moreDatails} />
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
