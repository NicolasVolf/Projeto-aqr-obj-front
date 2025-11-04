import React, { useState } from 'react';
import './SportsNav.css';




const sports = [
  { id: 1, name: 'Futebol', icon: 'fa-futbol', count: 35 },
  { id: 2, name: 'Vôlei', icon: 'fa-volleyball', count: 1 },
  { id: 3, name: 'Basquete', icon: 'fa-basketball', count: 0 },
  { id: 4, name: 'Tênis', icon: 'fa-table-tennis-paddle-ball', count: 8 },
  { id: 5, name: 'MMA', icon: 'fa-hand-fist', count: 0 },
  { id: 6, name: 'Tênis de Mesa', icon: 'fa-table-tennis', count: 2 },
  { id: 7, name: 'Futebol Am.', icon: 'fa-futbol', count: 1 },
  { id: 8, name: 'E-Sports', icon: 'fa-gamepad', count: 5 },
  { id: 9, name: 'Futsal', icon: 'fa-futbol', count: 2 },
];

const overlayData = {
  1: { // Futebol
    competitions: [
      { name: 'Brasileirão Betano' },
      { name: 'FIFA Club World Cup'},
      { name: 'Liga dos Campeões da UEFA'},
      { name: 'UEFA Liga Europa'},
      { name: 'Premier League' },
      { name: 'LaLiga'},
    ],
    teams: [
      { name: 'Flamengo' },
      { name: 'Palmeiras' },
      { name: 'Atlético Mineiro' },
      { name: 'Real Madrid' },
      { name: 'Barcelona' },
      { name: 'Manchester City' },
    ],
    rankings: [
      { name: 'FIFA Classificações' },
      { name: 'UEFA Classificações' }
    ]
  },
  2: { // Vôlei
    competitions: [
      { name: 'Superliga Brasileira' },
      { name: 'FIVB World Championship' },
    ],
    teams: [
      { name: 'Sada Cruzeiro' },
      { name: 'Taubaté' }
    ],
    rankings: [
      { name: 'FIVB Ranking' }
    ]
  },
  3: { // Basquete
    competitions: [
      { name: 'NBA' },
      { name: 'NBB' },
      { name: 'EuroLeague' }
    ],
    teams: [
      { name: 'Lakers' },
      { name: 'Flamengo' },
      { name: 'Real Madrid' }
    ],
    rankings: [
      { name: 'FIBA Ranking' }
    ]
  },
  4: { // Tênis
    competitions: [
      { name: 'Wimbledon' },
      { name: 'Roland Garros' },
      { name: 'Australian Open' },
      { name: 'US Open' }
    ],
    teams: [],
    rankings: [
      { name: 'ATP Ranking' },
      { name: 'WTA Ranking' }
    ]
  },
  5: { // MMA
    competitions: [
      { name: 'UFC' },
      { name: 'Bellator' }
    ],
    teams: [],
    rankings: [
      { name: 'UFC Rankings' }
    ]
  },
  6: { // Tênis de Mesa
    competitions: [
      { name: 'World Table Tennis' }
    ],
    teams: [],
    rankings: [
      { name: 'ITTF Ranking' }
    ]
  },
  7: { // Futebol Am.
    competitions: [
      { name: 'Copa Paulista' }
    ],
    teams: [
      { name: 'Paulista FC' }
    ],
    rankings: []
  },
  8: { // E-Sports
    competitions: [
      { name: 'CBLOL' },
      { name: 'The International' }
    ],
    teams: [
      { name: 'LOUD' },
      { name: 'paiN Gaming' }
    ],
    rankings: [
      { name: 'HLTV Ranking' }
    ]
  },
  9: { // Futsal
    competitions: [
      { name: 'Liga Nacional de Futsal' }
    ],
    teams: [
      { name: 'Magnus' },
      { name: 'Carlos Barbosa' }
    ],
    rankings: []
  }
};

const SportsNav = () => {
  const [hoveredSport, setHoveredSport] = useState(null);

  return (
    <nav className="sports-nav">
      <div className="sports-list">
        {sports.map(sport => (
          <div
            className="sport-item"
            key={sport.id}
            onMouseEnter={() => setHoveredSport(sport.id)}
            onMouseLeave={() => setHoveredSport(null)}
          >
            <span className="sport-icon">
              <i className={`fa-solid ${sport.icon}`}></i>
            </span>
            <span className="sport-name">{sport.name}</span>
            {sport.count > 0 && (
              <span className="sport-count">{sport.count}</span>
            )}
            {/* Overlay simples ao passar o mouse */}
            {hoveredSport === sport.id && overlayData[sport.id] && (
              <div className="sport-overlay">
                <div><strong>Competições:</strong></div>
                <ul>
                  {overlayData[sport.id].competitions.map((c, i) => (
                    <li key={i}>{c.name}</li>
                  ))}
                </ul>
                {overlayData[sport.id].teams.length > 0 && (
                  <>
                    <div><strong>Times:</strong></div>
                    <ul>
                      {overlayData[sport.id].teams.map((t, i) => (
                        <li key={i}>{t.name}</li>
                      ))}
                    </ul>
                  </>
                )}
                {overlayData[sport.id].rankings.length > 0 && (
                  <>
                    <div><strong>Rankings:</strong></div>
                    <ul>
                      {overlayData[sport.id].rankings.map((r, i) => (
                        <li key={i}>{r.name}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="sports-actions">
        <button className="fantasy-btn">FANTASY</button>
        <button className="odds-btn">ODDS EM QUEDA</button>
      </div>
    </nav>
  );
};

export default SportsNav;
