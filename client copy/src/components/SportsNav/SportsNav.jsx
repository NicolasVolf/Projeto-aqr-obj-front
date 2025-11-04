import React, { useState } from 'react';
import './SportsNav.css';


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
