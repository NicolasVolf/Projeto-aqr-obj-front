// src/components/MatchModal/MatchModal.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MatchModal.css';

// (opcional) seu mock local com jogadores; se não quiser fallback, remova/ignore
const detailedMatchesFallback = {
  // ... cole seu detailedMatches aqui se quiser fallback de jogadores
};

const MatchModal = ({ matchId, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(null); // objeto vindo do backend
  const [fallback, setFallback] = useState(null);

  useEffect(() => {
    if (!matchId) {
      setMatch(null);
      setFallback(null);
      return;
    }

    let mounted = true;
    async function fetchDetail() {
      try {
        setLoading(true);
        const res = await axios.get(`/api/partidas/${matchId}`);
        if (!mounted) return;
        setMatch(res.data);

        // opcional: tentar achar fallback players pelo padrão de chave (se você mantiver detailedMatches)
        // ex.: chave = `${mandante}-${visitante}-1` em lowercase
        const mand = res.data.timeMandante?.nome?.toLowerCase().replace(/\s+/g, '-');
        const vis = res.data.timeVisitante?.nome?.toLowerCase().replace(/\s+/g, '-');
        const key = mand && vis ? `${mand}-${vis}-1` : null;
        if (key && detailedMatchesFallback[key]) setFallback(detailedMatchesFallback[key]);
        else setFallback(null);
      } catch (err) {
        console.error(err);
        setMatch(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchDetail();
    return () => { mounted = false; };
  }, [matchId]);

  if (!matchId) return null;

  // se não existe match (erro), exibe nada
  if (loading) return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">Carregando...</div>
    </div>
  );

  if (!match) return null;

  const home = match.timeMandante;
  const away = match.timeVisitante;
  const estadio = match.estadio;
  const campeonato = match.campeonato;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <h2>{home?.nome || '—'} <span className="vs-inline">x</span> {away?.nome || '—'}</h2>
          <div className="meta">
            <div>{match.data || ''} {match.resultado ? `• Resultado: ${match.resultado}` : ''}</div>
            <div>{campeonato?.nome || ''} {estadio ? `• ${estadio.nome}` : ''}</div>
          </div>
        </div>

        <div className="modal-body">
          <div className="team-column">
            <h3>{home?.nome}</h3>
            {fallback?.home?.players ? (
              <ul>{fallback.home.players.map((p, i) => <li key={i}>{p}</li>)}</ul>
            ) : (
              <div className="no-players">Nenhuma lista de jogadores disponível</div>
            )}
          </div>

          <div className="match-middle">
            <div className="stadium-box">
              <div><strong>Estádio</strong></div>
              <div>{estadio?.nome || '—'}</div>
            </div>
          </div>

          <div className="team-column">
            <h3>{away?.nome}</h3>
            {fallback?.away?.players ? (
              <ul>{fallback.away.players.map((p, i) => <li key={i}>{p}</li>)}</ul>
            ) : (
              <div className="no-players">Nenhuma lista de jogadores disponível</div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="close-btn">Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default MatchModal;
