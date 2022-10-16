import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testApi = () => {
    fetch('http://localhost:3001/hello')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API call is in the console</p>
        <a onClick={testApi}>Test Api</a>
      </header>
    </div>
  );
}

export default App;
