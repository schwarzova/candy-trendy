import React from 'react';
import Select from 'react-select';

import styles from './MainBox.module.css';

type Props = {
  darkMode: boolean;
  onDarkModeChange: () => void;
  onShowCategoriesChange: () => void;
  onCategoriesFilter: (values: string[]) => void;
  showCategories: boolean;
};

function ConfigForm(props: Props) {
  const options = [
    { value: 'jokes', label: 'Jokes' },
    { value: 'movies', label: 'Movies' },
    { value: 'fun', label: 'Fun' },
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
          onChange={(options) =>
            props.onCategoriesFilter(options.map((o) => o.value))
          }
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
