import { Fragment } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

function BearCounter() {
  const bears = useStore((state) => state.bears);
  const addBears = useStore((state) => state.increasePopulation);
  return (
    <h1>
      {bears} around here ...<button onClick={addBears}>button</button>
    </h1>
  );
}

const Counter = () => {
  const addBears = useStore((state) => state.increasePopulation);
  return (
    <Fragment>
      <div>
        <button onClick={addBears}>Another button</button>
      </div>
    </Fragment>
  );
};

const App = () => {
  return (
    <div>
      <BearCounter />
      <Counter />
      react app here
    </div>
  );
};

export default App;
