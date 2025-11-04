import React from 'react';
import Header from './components/Header/Header';
import MatchesList from './components/MatchesList/MatchesList';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: 32, margin: '24px' }}>
        <MatchesList />
      </div>
    </div>
  );
}

export default App;
