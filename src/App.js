// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
// const name = "SAMEER";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) =>{
         setalert({
          msg: message,
          type : type
         })  
         setTimeout(() => {
          setalert(null)
         }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setmode('light')
      showAlert("Light mode has been enable", "success")
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
      <Alert alert ={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
