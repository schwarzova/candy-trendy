import React, { useState } from 'react';
import { useAppContext } from '../../context/state';
import Buttons from './Buttons';
import ConfigForm from './ConfigForm';

import styles from './MainBox.module.css';
import Title from './Title';

type Props = {
  lastScraped: string;
  onCategoriesFilter: (values: string[]) => void;
};

function MainBox(props: Props) {
  const { darkMode, showCategories, onDarkModeToggle, onShowCategoriesToggle } =
    useAppContext();

  const [leftLampOn, setLeftLampOn] = useState(false);
  const [rightLampOn, setRightLampOn] = useState(false);

  function handleDarkModeChange() {
    onDarkModeToggle();

    if (!darkMode) {
      setTimeout(() => setLeftLampOn(!darkMode), 400);
      setTimeout(() => setRightLampOn(!darkMode), 800);
    } else {
      setTimeout(() => setRightLampOn(!darkMode), 200);
      setTimeout(() => setLeftLampOn(!darkMode), 600);
    }
  }

  return (
    <div className={styles.mainBox}>
      <Title
        darkMode={darkMode}
        isLeftLampOn={leftLampOn}
        isRightLampOn={rightLampOn}
      />
      <Buttons lastScraped={props.lastScraped} />
      <ConfigForm
        darkMode={darkMode}
        onCategoriesFilter={props.onCategoriesFilter}
        onDarkModeChange={handleDarkModeChange}
        onShowCategoriesChange={onShowCategoriesToggle}
        showCategories={showCategories}
      />
    </div>
  );
}

export default MainBox;
