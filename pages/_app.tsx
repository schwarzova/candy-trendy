import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { MyContext } from '../context/state';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <MyContext.Provider
      value={{
        darkMode,
        onDarkModeToggle: () => setDarkMode(!darkMode),
        onShowCategoriesToggle: () => setShowCategories(!showCategories),
        showCategories,
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
