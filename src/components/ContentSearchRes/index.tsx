import { IMovie } from '../../models';
import CarouselMovies from '../CarouselMovies';
import styles from './contentSearchRes.module.scss';

interface IContentSearchResProps {
  movies: IMovie[];
  channels: IMovie[];
}

function ContentSearchRes({ channels, movies }: IContentSearchResProps) {
  const res = [
    { titleCarousel: 'All', lengthCarousel: channels.length + movies.length, data: [...channels, ...movies] },
    { titleCarousel: 'TV channels', lengthCarousel: channels.length, data: channels },
    { titleCarousel: 'TV Shows', lengthCarousel: movies.length, data: movies },
    { titleCarousel: 'Movies', lengthCarousel: 0, data: [] },
  ];

  return (
    <>
      <div className={styles.showsButtons}>
        {res.map(({ titleCarousel, lengthCarousel }) => (
          <button type='button' key={titleCarousel}>{`${titleCarousel} (${lengthCarousel})`}</button>
        ))}
      </div>

      {res.map(
        ({ lengthCarousel, titleCarousel, data }) =>
          titleCarousel !== 'All' &&
          lengthCarousel && (
            <div key={titleCarousel}>
              <div className={styles.type}>{`${titleCarousel} (${lengthCarousel})`}</div>
              <CarouselMovies data={data} titleCarousel={titleCarousel} />
            </div>
          )
      )}
    </>
  );
}

export default ContentSearchRes;
