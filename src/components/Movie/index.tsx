import classNames from 'classnames';
import { IMovie } from '../../models';
import { ReactComponent as New } from '../../images/type=new.svg';
import { ReactComponent as MoreDetails } from '../../images/moreDetails.svg';
import TextCard from '../TextCard';
import styles from './movie.module.scss';
import { useState } from 'react';

interface IPropsMovie {
  movie: IMovie;
}

function Movie({ movie }: IPropsMovie) {
  const { poster, imdb_rate, is_new, keyframe } = movie;
  const [picture, setPicture] = useState(poster);

  return (
    <div className={styles.cardMovie} onMouseEnter={() => setPicture(keyframe)} onMouseLeave={() => setPicture(poster)}>
      <div className={styles.imgBox}>
        <img style={{}} src={`api/${picture}`} alt='picture' className={styles.img} />

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
