import classNames from 'classnames';
import { IMovie } from '../../models';
import { ReactComponent as New } from '../../images/type=new.svg';
import { ReactComponent as MoreDetails } from '../../images/moreDetails.svg';
import TextCard from '../TextCard';
import styles from './movie.module.scss';

interface IPropsMovie {
  movie: IMovie;
}

function Movie({ movie }: IPropsMovie) {
  const { poster, imdb_rate, is_new } = movie;
  return (
    <div className={styles.cardMovie}>
      <div className={styles.imgBox}>
        <img src={`api/${poster}`} alt='picture' className={styles.img} />

        <div className={classNames(styles.btnOnIMG, styles.topBtnOn)}>
          {is_new && <New className={styles.new} />}
          <div className={styles.greenButton}>
            IMDB &nbsp; <span>{imdb_rate}/10</span>
          </div>
        </div>

        <div className={classNames(styles.btnOnIMG, styles.bottomBtnOn)}>
          {is_new && <New className={styles.new} />}
          <div className={styles.greenButton}>
            IMDB &nbsp; <span>{imdb_rate}/10</span>
          </div>
        </div>
        <MoreDetails className={styles.moreDatails} />
      </div>

      <TextCard movie={movie} />
    </div>
  );
}

export default Movie;
