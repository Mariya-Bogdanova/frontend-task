import styles from './movieList.module.scss';
import { IMovie } from '../../models';

interface IMovieListProps {
  movies: IMovie[];
}

function MovieList({}: IMovieListProps) {
  return (
    <>
      <div className={styles.searchConteiner}>MovieList</div>
    </>
  );
}

export default MovieList;
