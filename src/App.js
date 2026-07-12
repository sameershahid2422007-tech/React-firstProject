// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// const name = "SAMEER";

function App() {
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

<Navbar title="TextUtils" about2="About" />
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
</div>
    </>
  );
}

export default App;
