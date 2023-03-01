import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <Form boxes={boxes} setBoxes={setBoxes} />
      <Display boxes={boxes} />
    </div>
  );
}

export default App;
