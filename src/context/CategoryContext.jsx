import { createContext, useContext, useEffect, useState } from 'react';
import useMenu from 'hooks/useMenu';
const CategoryContext = createContext();
export function CategoryProvider({ children }) {
  const {
    mainMenuQuery: { data: category },
  } = useMenu();

  const {
    subMenuQuery: { data: subCategory },
  } = useMenu();

  return (
    <CategoryContext.Provider value={{ category, subCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return useContext(CategoryContext);
}
