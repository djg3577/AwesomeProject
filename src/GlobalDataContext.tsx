// GlobalDataContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalDataContext = createContext();

export const useGlobalData = () => {
  return useContext(GlobalDataContext);
};

export const GlobalDataProvider = ({ children }) => {
  const [globalProtein, setGlobalProtein] = useState(0);
  const [globalFat, setGlobalFat] = useState(0);
  const [globalCalories, setGlobalCalories] = useState(0);
  const [globalCarbs, setGlobalCarbs] = useState(0); 

  const addFoodToGlobals = (protein, fat, carbs, calories) => {
    setGlobalProtein(globalProtein + protein);
    setGlobalFat(globalFat + fat);
    setGlobalCarbs(globalCarbs + carbs);
    setGlobalCalories(globalCalories + calories);
  };

  const value = {
    globalProtein,
    globalFat,
    globalCarbs,
    globalCalories,
    addFoodToGlobals,
  };

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};
