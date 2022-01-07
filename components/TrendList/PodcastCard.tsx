/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Podcast = {
  img: string;
  title: string;
  artist: string;
  rank: number;
};

type Props = {
  podcast?: Podcast;
};

function NetflixCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (!props.podcast) {
    return null;
  }

  return (
    <a
      href="https://chartable.com/charts/itunes/us-all-podcasts-podcasts"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{ background: '#cbe6cc', color: 'green', textAlign: 'center' }}
    >
      <img
        src="https://seeklogo.com/images/A/apple-podcast-logo-0CF661058F-seeklogo.com.png"
        alt="Apple Podcasts logo"
        width={30}
        height={30}
        style={{ marginTop: '-20px' }}
      />
      <h2>Top Apple Podcasts</h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginTop: '10px', position: 'relative' }}>
          <img
            src={props.podcast.img}
            width={120}
            height={120}
            alt={props.podcast.title}
            style={{ marginRight: '10px', border: '4px solid green' }}
          />
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  marginRight: '5px',
                  backgroundColor: 'green',
                  borderRadius: '50%',
                  color: '#fff',
                  fontSize: '14px',
                  marginTop: '10px',
                  width: '50px',
                }}
              >
                {'# '}
                {props.podcast.rank}
              </div>
              <p>{props.podcast.title}</p>
              <p style={{ color: '#000', fontSize: '14px' }}>
                {props.podcast.artist}
              </p>
            </div>
          </div>
        </div>
      </div>
      {showCategories && <div className={styles.categories}>#movies #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <span>https://chartable.com</span>
      </div>
    </a>
  );
}

export default NetflixCard;
