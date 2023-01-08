import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Circle } from '../../images/circle.svg';
import { ReactComponent as MyStuff } from '../../images/My_Stuff.svg';
import { ReactComponent as Movies } from '../../images/Movies.svg';
import { ReactComponent as LiveTV } from '../../images/Live_TV.svg';
import { ReactComponent as TVShows } from '../../images/TV_Shows.svg';
import { ReactComponent as Loupe } from '../../images/loupe.svg';
import { ReactComponent as Man } from '../../images/man.svg';
import { ReactComponent as Discover } from '../../images/Discover.svg';
import styles from './header.module.scss';

function Search() {
  return (
    <div className={styles.header}>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link to='/'>
          <Discover />
          Discover
        </Link>
        <Link to='/'>
          <LiveTV />
          Live TV
        </Link>
        <Link to='/'>
          <TVShows />
          TV Shows
        </Link>
        <Link to='/'>
          <Movies />
          Movies
        </Link>
        <Link to='/'>
          <MyStuff />
          My Stuff
        </Link>
      </div>

      <div className={styles.menuButton}>
        <button className={styles.loupeBtn}>
          <Loupe className={styles.svg} />
        </button>
        <button className={styles.manBtn}>
          <Man className={styles.svg} />
          <Circle className={styles.circle} />
        </button>
      </div>
    </div>
  );
}
export default Search;
