import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ThemeToggler } from './components/shared/ThemeManager/ThemeToggler';
import { Provider } from 'react-redux';
import { store } from './store/ReduxStore';
import { StoreRouter } from './components/Router/StoreRouter';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeToggler>
          <StoreRouter />
        </ThemeToggler>
      </Provider>
    </div>
  );
}

export default App;
