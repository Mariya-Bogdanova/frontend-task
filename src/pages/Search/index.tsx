import { useState } from 'react';
import Form from '../../components/Form';
import CarouselMovies from '../../components/CarouselMovies';
import { IMovie } from '../../models';
import styles from './search.module.scss';

function Search() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <>
      <div className={styles.searchConteiner}>
        <Form setMovies={setMovies} />
        <CarouselMovies movies={movies} />
      </div>
    </>
  );
}

export default Search;
