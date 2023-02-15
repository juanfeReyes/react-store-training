import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeToggler } from './components/shared/ThemeManager/ThemeToggler';

function App() {

  return (
    <div className="App">
      <ThemeToggler>
        <HomePage />
      </ThemeToggler>
    </div>
  );
}

export default App;
