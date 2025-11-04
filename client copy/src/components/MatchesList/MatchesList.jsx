import React, { useState } from 'react';
import './MatchesList.css';
import MatchModal from '../MatchModal/MatchModal';

const matches = [
  {
    id: 1,
    competition: { name: 'Liga dos Campeões da UEFA', type: 'Europa' },
    games: [
      { id: 1, homeTeam: 'Slavia Praha', awayTeam: 'Arsenal', time: '14:45', matchKey: 'slavia-arsenal-1' },
      { id: 3, homeTeam: 'Liverpool', awayTeam: 'Real Madrid', time: '17:00', matchKey: 'liverpool-real-1' },
    ]
  },
  {
    id: 2,
    competition: { name: 'Brasileirão Série A', type: 'Brasil' },
    games: [
      { id: 1, homeTeam: 'Flamengo', awayTeam: 'Vasco', time: '18:30', matchKey: 'flamengo-vasco-1' },
      { id: 2, homeTeam: 'São Paulo', awayTeam: 'Corinthians', time: '20:00', matchKey: 'sao-paulo-corinthians-1' },
    ]
  },
  {
    id: 3,
    competition: { name: 'Major League Soccer (MLS)', type: 'EUA' },
    games: [
      { id: 1, homeTeam: 'LA Galaxy', awayTeam: 'New York City FC', time: '22:00', matchKey: 'la-nycfc-1' },
      { id: 2, homeTeam: 'Inter Miami', awayTeam: 'Atlanta United', time: '23:30', matchKey: 'intermiami-atlanta-1' }
    ]
  }
];

const MatchesList = () => {
  const [selectedMatchKey, setSelectedMatchKey] = useState(null);

  // Agrupa por region (competition.type)
  const grouped = matches.reduce((acc, category) => {
    const region = category.competition.type || 'Outros';
    if (!acc[region]) acc[region] = [];
    acc[region].push(category);
    return acc;
  }, {});

  return (
    <div className="matches-container">
      {Object.entries(grouped).map(([region, categories]) => (
        <div className="matches-box" key={region}>
          <div className="matches-box-header">
            <span className="matches-region">{region}</span>
          </div>

          {categories.map(category => (
            <div className="category" key={category.id}>
              <div className="category-header">
                <span className="category-name">{category.competition.name}</span>
              </div>

              {category.games.map(match => (
                <div
                  className="match-card"
                  key={`${category.id}-${match.id}`}
                  onClick={() => setSelectedMatchKey(match.matchKey)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedMatchKey(match.matchKey); }}
                >
                  <div className="match-time">{match.time}</div>
                  <div className="match-teams">
                    <span className="team home">{match.homeTeam}</span>
                    <span className="vs">x</span>
                    <span className="team away">{match.awayTeam}</span>
                  </div>
                  <span className={`match-status ${match.status === 'Ao Vivo' ? 'live' : ''}`}>
                    {match.status || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>
      ))}

      <MatchModal
        matchKey={selectedMatchKey}
        onClose={() => setSelectedMatchKey(null)}
      />
    </div>
  );
};

export default MatchesList;
