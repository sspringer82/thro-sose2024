import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function useEngine(init: number) {
  useEffect(() => {
    console.log('engine effect!');
  }, []);

  const engineState = useState(init);

  return engineState;
}

function MyComp({ onClick }: any) {
  const [tire] = useState(4);
  const [engine, setEngine] = useEngine(0);

  useEffect(() => {
    console.log('tire effect!');
    return () => {};
  }, [tire]);

  return (
    <div onClick={onClick}>
      <button onClick={() => setEngine(engine + 1)}>click me</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyComp onClick={() => {}}></MyComp>
      <label htmlFor=""></label>
      <div className="rüdiger">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
