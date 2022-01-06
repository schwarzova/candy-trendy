/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Game = {
  img: string;
  title: string;
  rank: number;
};

type Props = {
  games: Game[];
};

function GameCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (props.games.length === 0) {
    return null;
  }

  return (
    <a
      href="https://twitchtracker.com/games"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{ background: '#9147FF', color: '#000', textAlign: 'center' }}
    >
      <img
        src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/13750fd9eb41e11a67d2410d47d9e33a"
        alt="Twitch logo"
        width={40}
        height={40}
        style={{ marginTop: '-15px' }}
      />
      <h2>Twitch trending games</h2>
      <div style={{ textAlign: 'left' }}>
        {props.games.map((m, i) => (
          <div
            key={i}
            style={{ display: 'flex', marginTop: '10px', position: 'relative' }}
          >
            <img
              src={m.img}
              width={80}
              height={100}
              alt={m.title}
              style={{ marginRight: '10px' }}
            />
            <div>
              <p>
                <div
                  style={{
                    padding: '3px',
                    textAlign: 'center',
                    width: '50px',
                    marginRight: '5px',
                    borderRadius: '5px',
                    backgroundColor: '#000',
                    color: '#fff',
                  }}
                >
                  {'#'}
                  {m.rank}
                </div>
                {m.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showCategories && <div className={styles.categories}>#games #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <a
          href="https://twitchtracker.com/games"
          target="_blank"
          rel="noreferrer"
        >
          https://twitchtracker.com/games
        </a>
      </div>
    </a>
  );
}

export default GameCard;
