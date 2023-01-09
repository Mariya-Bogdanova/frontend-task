import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IMovie } from '../../models';
import Movie from '../Movie';
import styles from './carouselMovies.module.scss';

interface ICarouselMoviesProps {
  movies: IMovie[];
}

function CarouselMovies({ movies }: ICarouselMoviesProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      containerClass={styles['carousel-container']}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      itemClass={styles['carousel-item-padding-40-px']}
      centerMode={false}
    >
      {movies &&
        movies.map(movie => (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
    </Carousel>
  );
}

export default CarouselMovies;
