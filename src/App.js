import React from 'react';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch';
import UserBoard from './components/UserBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Title content="React App" />
      </header>
      <main>
        < LightSwitch />
        < UserBoard content="User Board"/>
      
      </main>
    </div>
  );
}

export default App;
