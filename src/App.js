import React from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import PlaceForm from './PlaceForm.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Globe</h2>
          <SearchBar />
        </div>
        <p className="App-intro">
        </p>
        <PlaceForm />
      </div>
    );
  }
}

export default App;
