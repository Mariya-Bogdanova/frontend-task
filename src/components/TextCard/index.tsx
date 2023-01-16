import { IMovie } from '../../models';
import styles from './TextCard.module.scss';

interface IPropsTextCard {
  movie: IMovie;
}

function TextCard({ movie: { country, genres, length, min_age, num_seasons, title, year } }: IPropsTextCard) {
  return (
    <div className={styles.text}>
      <div className={styles.title}>{title}</div>
      <div className={styles.meta}>
        <div>{country} </div>
        <div>{year}</div>
        {length && <div>{length / 60} min</div>}
        <div>{num_seasons} seasons</div>
        <div>{min_age}+</div>
      </div>
      <div className={styles.genres}>{genres?.join(', ')}</div>
    </div>
  );
}

export default TextCard;
