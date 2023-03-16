import { useState } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('vinicius');
    const [info, setInfo] = useState({
      city: 'Praia Grande',
      state: 'São Paulo',
    });
  return (
    <div>
      <h1>Counter: { counter }</h1>
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}
      >
        Incrementar
      </button>
      <p>{ name }</p>
      <p>{ info.city }</p>
      < p>{ info.state }</p>

    </div>
  );
}

export default App;
