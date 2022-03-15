import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';

function App() {

  const [logoR, setLogoR] = useState(logo);
  const [currDate, setCurrDate] = useState(new Date());

  console.log(currDate);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoR} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home/>
        <Modal logoR={logoR} currDate={currDate} />
      </header>
      
    </div>
  );
}

export default App;
