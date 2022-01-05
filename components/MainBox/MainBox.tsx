import React, { useState } from 'react';
import ConfigForm from './ConfigForm';

import styles from './MainBox.module.css';
import Title from './Title';

type Props = {
  darkMode: boolean;
  onDarkModeChange: () => void;
  onShowCategoriesChange: () => void;
  showCategories: boolean;
};

function MainBox(props: Props) {
  const [leftLampOn, setLeftLampOn] = useState(false);
  const [rightLampOn, setRightLampOn] = useState(false);

  function handleDarkModeChange() {
    props.onDarkModeChange();

    if (!props.darkMode) {
      setTimeout(() => setLeftLampOn(!props.darkMode), 400);
      setTimeout(() => setRightLampOn(!props.darkMode), 800);
    } else {
      setTimeout(() => setRightLampOn(!props.darkMode), 200);
      setTimeout(() => setLeftLampOn(!props.darkMode), 600);
    }
  }

  return (
    <div className={styles.mainBox}>
      <Title
        darkMode={props.darkMode}
        isLeftLampOn={leftLampOn}
        isRightLampOn={rightLampOn}
      />
      <ConfigForm
        darkMode={props.darkMode}
        onDarkModeChange={handleDarkModeChange}
        onShowCategoriesChange={props.onShowCategoriesChange}
        showCategories={props.showCategories}
      />
    </div>
  );
}

export default MainBox;
