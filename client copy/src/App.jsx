import React from 'react';
import Header from './components/Header/Header';
import SportsNav from './components/SportsNav/SportsNav';
import MatchesList from './components/MatchesList/MatchesList';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <SportsNav />
      <div style={{ display: 'flex', gap: 32, margin: '0 24px' }}>
        <MatchesList />
      </div>
    </div>
  );
}

export default App;
