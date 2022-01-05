import { createContext, useContext, ReactNode } from 'react';

type ContextType = {
  darkMode: boolean;
  onDarkModeToggle: () => void;
  onShowCategoriesToggle: () => void;
  showCategories: boolean;
};

export const MyContext = createContext<ContextType>({
  darkMode: false,
  onDarkModeToggle: () => {},
  onShowCategoriesToggle: () => {},
  showCategories: false,
});

export function useAppContext() {
  return useContext(MyContext);
}
