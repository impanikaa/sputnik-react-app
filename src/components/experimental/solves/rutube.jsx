import React from 'react';
import styles from './style.module.css';

const RutubePlayer = ({ videoUrl }) => {
  return (
    <iframe
      src={videoUrl}
      className={styles.video}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Rutube video player"
    ></iframe>
  );
};

export default RutubePlayer;
