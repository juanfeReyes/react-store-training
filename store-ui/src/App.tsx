import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeToggler } from './components/shared/ThemeManager/ThemeToggler';
import { Provider } from 'react-redux';
import { store } from './store/ReduxStore';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeToggler>
          <HomePage />
        </ThemeToggler>
      </Provider>
    </div>
  );
}

export default App;
