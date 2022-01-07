import React from 'react';
import Image from 'next/image';

import styles from './MainBox.module.css';
import { useAppContext } from '../../context/state';

type Props = {
  lastScraped: string;
};

function Buttons(props: Props) {
  const { darkMode } = useAppContext();

  return (
    <div className={styles.buttonsWrapper}>
      <div className={darkMode ? styles.lastUpdateDark : styles.lastUpdate}>
        Updated: {props.lastScraped}
      </div>
      <a
        href="https://www.buymeacoffee.com/candyTrendy1"
        target="_blank"
        rel="noreferrer"
        className={styles.buyCoffee}
      >
        Buy us a coffee
        <div style={{ marginLeft: '5px', marginBottom: '5px' }}>
          <Image
            src="/images/pepeCoffee.png"
            alt="Coffee with green frog"
            width={22}
            height={25}
          />
        </div>
      </a>
    </div>
  );
}

export default Buttons;
