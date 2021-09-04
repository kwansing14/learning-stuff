import { createContext, useContext } from 'react';

const StoreContext = createContext();

const storeProvider = (props) => {
  const providerValue = 'someValue';
  return (
    <StoreContext.Provider value={providerValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export default storeProvider;
