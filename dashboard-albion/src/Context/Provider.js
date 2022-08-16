import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userSelected, setUserSelected] = useState([]);

  const providerValue = {
    userSelected,
    setUserSelected,
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>);
};

export default Provider;