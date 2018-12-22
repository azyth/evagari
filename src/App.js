import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/game_board';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <div className='play_area'>
          <header className="App-header">
            <Dashboard></Dashboard>
          </header>

            <GameBoard></GameBoard>
          
        </div>
      </Provider>
    );
  }
}

export default App;
