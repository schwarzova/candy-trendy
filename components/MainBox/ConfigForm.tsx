import React from 'react';
import Select from 'react-select';

import styles from './MainBox.module.css';

type Props = {
  darkMode: boolean;
  onDarkModeChange: () => void;
  onShowCategoriesChange: () => void;
  showCategories: boolean;
};

function ConfigForm(props: Props) {
  const options = [
    { value: 'jokes', label: 'Jokes' },
    { value: 'youtube', label: 'Youtube' },
  ];

  return (
    <div className={props.darkMode ? styles.configFormDark : styles.configForm}>
      <div className={styles.select}>
        <Select
          options={options}
          isMulti
          closeMenuOnSelect={false}
          classNamePrefix={
            props.darkMode ? 'react-select-dark' : 'react-select'
          }
          placeholder="Filter by categories"
        />
      </div>

      <input
        type="checkbox"
        id="categories"
        name="categories"
        checked={props.showCategories}
        onChange={props.onShowCategoriesChange}
      />
      <label className={styles.categoriesCheckbox} htmlFor="categories">
        Show categories
      </label>

      <input
        type="checkbox"
        id="darkMode"
        name="darkMode"
        checked={props.darkMode}
        onChange={props.onDarkModeChange}
      />
      <label htmlFor="darkMode">Dark mode</label>
    </div>
  );
}

export default ConfigForm;
