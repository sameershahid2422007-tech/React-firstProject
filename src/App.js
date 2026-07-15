// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
// const name = "SAMEER";

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  
  
  return (
    <>

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Sameer
        </a>
      </header>
    </div>
    <h1 className='blank'>Hello {name}</h1> */}

      <Navbar title="TextUtils" about2="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
