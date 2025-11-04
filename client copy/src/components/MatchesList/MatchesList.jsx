import React from 'react';
import './MatchesList.css';

const matches = [
  {
    id: 1,
    competition: { name: 'Liga dos Campeões da UEFA', type: 'Europa' },
    games: [
      {
        id: 1,
        homeTeam: 'Slavia Praha',
        awayTeam: 'Arsenal',
        time: '14:45',
        status: 'Ao Vivo'
      },
      {
        id: 2,
        homeTeam: 'Napoli',
        awayTeam: 'Frankfurt',
        time: '14:45',
        status: 'Ao Vivo'
      },
      {
        id: 3,
        homeTeam: 'Liverpool',
        awayTeam: 'Real Madrid',
        time: '17:00',
        status: 'Próximos'
      },
      {
        id: 4,
        homeTeam: 'PSG',
        awayTeam: 'Bayern',
        time: '17:00',
        status: 'Próximos'
      }
    ]
  }
];

const MatchesList = () => {
  return (
    <div className="matches-list">
      {matches.map(category => (
        <div className="category" key={category.id}>
          <div className="category-header">
            <span className="category-type">{category.competition.type}</span>
            <span className="category-name">{category.competition.name}</span>
          </div>
          {category.games.map(match => (
            <div className="match-card" key={match.id}>
              <div className="match-time">{match.time}</div>
              <div className="match-teams">
                <span className="team home">{match.homeTeam}</span>
                <span className="vs">x</span>
                <span className="team away">{match.awayTeam}</span>
              </div>
              <span className={`match-status ${match.status === 'Ao Vivo' ? 'live' : ''}`}>
                {match.status}
              </span>
              <button className="favorite-btn">
                <i className="fa-regular fa-star"></i>
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchesList;
