import { useState } from 'react';
import { IMovie } from '../../models';
import { ReactComponent as Play } from '../../images/Play.svg';
import styles from './channel.module.scss';

interface IPropsChannel {
  channel: IMovie;
}

function Channel({ channel }: IPropsChannel) {
  const { title, min_age, description, poster, keyframe } = channel;
  const [picture, setPicture] = useState(poster);

  return (
    <>
      <div className={styles.cardChannel}>
        <div
          className={styles.imgBox}
          onMouseEnter={() => setPicture(keyframe)}
          onMouseLeave={() => setPicture(poster)}
        >
          <img src={picture} alt='picture' className={styles.img} />
          <div className={styles.playAnimation}>
            <Play />
            <div className={styles.title}>{title}</div>
            <div>{`${description} (${min_age}+)`} </div>
          </div>
        </div>

        <div className={styles.title}>{title}</div>
        <div>{`${description} (${min_age}+)`} </div>
      </div>
    </>
  );
}

export default Channel;
