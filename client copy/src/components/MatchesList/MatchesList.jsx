// src/components/MatchesList/MatchesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MatchesList.css';
import MatchModal from '../MatchModal/MatchModal';

export default function MatchesList() {
  const [grouped, setGrouped] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetch() {
      try {
        setLoading(true);
        const res = await axios.get('/api/partidas'); // via proxy or same origin
        if (!mounted) return;

        const partidas = Array.isArray(res.data) ? res.data : [];

        // ordenar por data asc
        partidas.sort((a, b) => {
          const da = a.data ? new Date(a.data) : new Date(0);
          const db = b.data ? new Date(b.data) : new Date(0);
          return da - db;
        });

        // agrupar por campeonato.nome (usar "Todos" quando nulo)
        const map = partidas.reduce((acc, p) => {
          const campeonatoNome = (p.campeonato && p.campeonato.nome) || 'Todos';
          if (!acc[campeonatoNome]) acc[campeonatoNome] = [];
          acc[campeonatoNome].push(p);
          return acc;
        }, {});
        setGrouped(map);
      } catch (err) {
        setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetch();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="matches-center">Carregando partidas...</div>;
  if (error) return <div className="matches-center">Erro ao carregar partidas.</div>;

  return (
    <div className="matches-container">
      {Object.entries(grouped).map(([campeonato, categories]) => (
        <div className="matches-box" key={campeonato}>
          <div className="matches-box-header">
            <span className="matches-region">Todos</span>
          </div>

          <div className="category">
            <div className="category-header">
              <span className="category-name">{campeonato}</span>
            </div>

            <div className="category-games">
              {categories.map(match => (
                <div
                  className="match-card"
                  key={match.id}
                  onClick={() => setSelectedMatchId(match.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedMatchId(match.id); }}
                >
                  <div className="match-time">
                    {match.data ? new Date(match.data + 'T00:00:00').toLocaleDateString() : ''}
                  </div>

                  <div className="match-teams">
                    <span className="team home">{match.timeMandante?.nome || '—'}</span>
                    <span className="vs">x</span>
                    <span className="team away">{match.timeVisitante?.nome || '—'}</span>
                  </div>

                  <span className={`match-status ${match.resultado ? '' : ''}`}>
                    {match.resultado || ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}

      <MatchModal
        matchId={selectedMatchId}
        onClose={() => setSelectedMatchId(null)}
      />
    </div>
  );
}
