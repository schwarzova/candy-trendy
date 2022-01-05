import React from 'react';

import styles from './MainBox.module.css';
import Lamp from './Lamp';

type Props = {
  darkMode: boolean;
  isLeftLampOn: boolean;
  isRightLampOn: boolean;
};

function Title(props: Props) {
  const candyStyle =
    props.darkMode && !props.isLeftLampOn
      ? styles.candyDark
      : props.isLeftLampOn
      ? styles.candy
      : undefined;
  const trendyStyle =
    props.darkMode && !props.isRightLampOn
      ? styles.candyDark
      : props.isRightLampOn
      ? styles.candy
      : undefined;

  return (
    <div className={styles.mainTitle}>
      <div className={styles.leftLamp}>
        <Lamp isOn={props.isLeftLampOn} />
      </div>
      <h1 className={styles.title}>
        <span className={candyStyle}>CANDY</span>{' '}
        <span className={trendyStyle}>TRENDY</span>
      </h1>
      <div className={styles.rightLamp}>
        <Lamp isOn={props.isRightLampOn} />
      </div>
    </div>
  );
}

export default Title;
