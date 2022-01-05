import React, { useState } from 'react';
import Select from 'react-select';

import styles from './MainBox.module.css';
import Title from './Title';

type Props = {
  darkMode: boolean;
  onDarkModeChange: () => void;
};

function MainBox(props: Props) {
  const [leftLampOn, setLeftLampOn] = useState(false);
  const [rightLampOn, setRightLampOn] = useState(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  function handleDarkModeChange() {
    props.onDarkModeChange();

    if (!props.darkMode) {
      setTimeout(() => setLeftLampOn(!leftLampOn), 400);
      setTimeout(() => setRightLampOn(!rightLampOn), 800);
    } else {
      setTimeout(() => setRightLampOn(!rightLampOn), 200);
      setTimeout(() => setLeftLampOn(!leftLampOn), 600);
    }
  }

  return (
    <div className={styles.mainBox}>
      <Title
        darkMode={props.darkMode}
        isLeftLampOn={leftLampOn}
        isRightLampOn={rightLampOn}
      />
      <div className={styles.configForm}>
        <div>
          <Select options={options} isMulti closeMenuOnSelect={false} />
        </div>
        <button onClick={handleDarkModeChange}>Show categories</button>
        <button onClick={handleDarkModeChange}>Dark mode</button>
      </div>
    </div>
  );
}

export default MainBox;
