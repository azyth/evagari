import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/game_board';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <header className="App-header">
          <div>
            <GameBoard>
            </GameBoard>
          </div>
        </header>
      </Provider>
    );
  }
}

export default App;
