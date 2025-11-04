import React from 'react';
import SportsOverlay from './SportsOverlay';

const SportsOverlay = ({ data }) => {
  return (
    <div className="sports-overlay">
      <div className="overlay-section">
        <div className="overlay-title">Principais competições</div>
        <ul>
          {data.competitions.length ? data.competitions.map((c, i) => (
            <li key={i}>{c.name}</li>
          )) : <li className="overlay-empty">Nenhuma competição disponível</li>}
        </ul>
      </div>
      <div className="overlay-section">
        <div className="overlay-title">Melhores equipes</div>
        <ul>
          {data.teams.length ? data.teams.map((t, i) => (
            <li key={i}>{t.name}</li>
          )) : <li className="overlay-empty">Nenhuma equipe disponível</li>}
        </ul>
      </div>
      <div className="overlay-section">
        <div className="overlay-title">Ranking</div>
        <ul>
          {data.rankings.length ? data.rankings.map((r, i) => (
            <li key={i}>{r.name}</li>
          )) : <li className="overlay-empty">Nenhum ranking disponível</li>}
        </ul>
      </div>
    </div>
  );
};

export default SportsOverlay;
