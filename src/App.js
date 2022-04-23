import React from 'react'
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';
import CounterValue from './components/CounterValue';
import { useSelector } from 'react-redux';


function App() {

  const isSubmited = useSelector(state => state.isSubmited);

  return (
    <div className="App">
      {(isSubmited) ?
        <>
          <Counter />
          <CounterValue />
        </>
        :
        <Form />
      }
    </div>
  );
}

export default App;
