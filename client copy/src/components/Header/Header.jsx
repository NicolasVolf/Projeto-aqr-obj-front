import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span>SofaScore</span>
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Pesquise por partidas, competições, times, jogadores e mais"
        />
        <div className="header-actions">
          <button className="login-btn">ENTRAR</button>
          <span className="header-icon"><i className="fa-regular fa-star"></i></span>
          <span className="header-icon"><i className="fa-regular fa-gear"></i></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
