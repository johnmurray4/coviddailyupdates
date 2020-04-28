import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
//import Search from './components/Search';
//import store from './store';

function App() {

  return (
    //<Provider store={store}>
      <div className="App" style={{backgroundColor: '#fab1a0'}}>
        <header className="App-header">
          
          <hr></hr>
          <Posts />
        </header>
      </div>
    //</Provider>
  );
}

export default App;
