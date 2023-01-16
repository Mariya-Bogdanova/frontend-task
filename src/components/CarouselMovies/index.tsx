import Carousel from 'react-multi-carousel';
import { IMovie } from '../../models';
import Channel from '../Channel';
import Movie from '../Movie';
import 'react-multi-carousel/lib/styles.css';
import styles from './carouselMovies.module.scss';

interface ICarouselMoviesProps {
  data: IMovie[];
  titleCarousel: string;
}
function CarouselMovies({ data, titleCarousel }: ICarouselMoviesProps) {
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
      {data &&
        data.map(el => (
          <div key={el.id}>{titleCarousel === 'TV channels' ? <Channel channel={el} /> : <Movie movie={el} />}</div>
        ))}
    </Carousel>
  );
}

export default CarouselMovies;
