import React, { useState } from 'react';
import MyContext from './MyContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState("");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export default DataProvider;
