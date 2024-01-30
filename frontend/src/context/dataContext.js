import React, { createContext, useContext, useState } from 'react';
import { UserData } from '../Data';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [userData, setUserData] = useState(UserData);

  return (
    <DataContext.Provider value={{ userData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
