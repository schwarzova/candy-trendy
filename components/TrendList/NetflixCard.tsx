/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type NetflixMovie = {
  img: string;
  title: string;
  rank: number;
};

type Props = {
  isShow?: boolean;
  movie?: NetflixMovie;
};

function NetflixCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (!props.movie) {
    return null;
  }

  return (
    <a
      href="https://flixpatrol.com/top10/netflix/"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{ background: '#000', color: 'red', textAlign: 'center' }}
    >
      <img
        src="https://zijuspesne.cz/wp-content/uploads/2020/06/netflix-logo-circle-png-5.png"
        alt="Netflix logo"
        width={120}
        height={80}
        style={{ marginTop: '-20px' }}
      />
      <h2>
        {props.isShow ? 'Netflix trending shows' : 'Netflix trending movies'}
      </h2>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginTop: '10px', position: 'relative' }}>
          <img
            src={props.movie.img}
            width={80}
            height={120}
            alt={props.movie.title}
            style={{ marginRight: '10px' }}
          />
          <div>
            <p>
              {props.movie.title}
              <div
                style={{
                  padding: '3px',
                  marginRight: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'red',
                  color: '#fff',
                  fontSize: '14px',
                  marginTop: '20px',
                }}
              >
                {'#'}
                {props.isShow ? props.movie.rank - 10 : props.movie.rank}
              </div>
            </p>
          </div>
        </div>
      </div>
      {showCategories && <div className={styles.categories}>#movies #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <a
          href="https://flixpatrol.com/top10/netflix/"
          target="_blank"
          rel="noreferrer"
        >
          https://flixpatrol.com/top10/netflix/
        </a>
      </div>
    </a>
  );
}

export default NetflixCard;
