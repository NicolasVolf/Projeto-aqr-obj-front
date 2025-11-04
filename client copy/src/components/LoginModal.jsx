import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode conectar a uma API real
    alert(`Bem-vindo, ${email}!`);
    onClose();
  };

  // Fecha ao clicar no fundo escuro
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        <button className="login-close-btn" onClick={onClose} aria-label="Fechar">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            autoFocus
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="login-submit-btn">Entrar</button>
        </form>
        <div className="login-extra">
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
