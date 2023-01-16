import { IMovie } from '../../models';
import CarouselMovies from '../CarouselMovies';
import styles from './contentSpotlight.module.scss';

interface IContentSpotlightProps {
  spotlightList: IMovie[];
}

function ContentSpotlight({ spotlightList }: IContentSpotlightProps) {
  return (
    <>
      <div className={styles.spotlight}>in the spotlight</div>
      <CarouselMovies data={spotlightList} titleCarousel='TV Shows' />
    </>
  );
}

export default ContentSpotlight;
