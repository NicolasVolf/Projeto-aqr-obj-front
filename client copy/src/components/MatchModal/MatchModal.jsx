import React from 'react';
import './MatchModal.css';

/**
 * detailedMatches é o "mock DB" local. Aqui coloquei jogadores reais quando encontrei
 * (ex.: nomes do Vasco do site oficial; nomes do Flamengo confirmados em fontes),
 * o resto foi mockado.
 *
 * Fontes: Vasco (site oficial), Transfermarkt/Globo notícias (Flamengo). Veja as referências.
 */
const detailedMatches = {
  'flamengo-vasco-1': {
    home: {
      name: 'Flamengo',
      stadium: 'Maracanã',
      date: '2025-11-12',
      time: '18:30',
      players: [
        'Agustín Rossi',
        'Rodrigo Caio',
        'Giorgian De Arrascaeta',
        'Jorginho',
        'Bruno Henrique',
        'Everton Ribeiro',
        'Luiz Araújo',
        'João Gomes',
        'Pedro',
        'Isla',
        'Arthur'
      ],
      stadiumInfo: {
        name: 'Maracanã',
        city: 'Rio de Janeiro',
        capacity: '78.838'
      }
    },
    away: {
      name: 'Vasco',
      stadium: 'São Januário',
      date: '2025-11-12',
      time: '18:30',
      players: [
        'Léo Jardim', 'Daniel Fuzato', 'Pablo', 'Paulo Ricardo', 'Puma Rodríguez',
        'Carlos Cuesta', 'Robert Renan', 'Lucas Freitas', 'Andrés Gómez', 'Mateus Carvalho',
        'Adson', 'Thiago Mendes'
      ],
      stadiumInfo: {
        name: 'Estádio de São Januário',
        city: 'Rio de Janeiro',
        capacity: '21.880'
      }
    }
  },
  'sao-paulo-corinthians-1': {
    home: {
      name: 'São Paulo',
      date: '2025-11-12',
      time: '20:00',
      players: [
        'Rafael', 'Igor Vinícius', 'Arboleda', 'Beraldo', 'Caio Paulista',
        'Pablo Maia', 'Alisson', 'Rodrigo Nestor', 'Wellington Rato',
        'Lucas Moura', 'Calleri'
      ],
      stadiumInfo: {
        name: 'Morumbi',
        city: 'São Paulo',
        capacity: '66.795'
      }
    },
    away: {
      name: 'Corinthians',
      date: '2025-11-12',
      time: '20:00',
      players: [
        'Cássio', 'Fagner', 'Gil', 'Lucas Veríssimo', 'Fábio Santos',
        'Gabriel Moscardo', 'Maycon', 'Renato Augusto', 'Matías Rojas',
        'Yuri Alberto', 'Wesley'
      ],
      stadiumInfo: {
        name: 'Morumbi',
        city: 'São Paulo',
        capacity: '66.795'
      }
    }
  },
  'slavia-arsenal-1': {
    home: {
      name: 'Slavia Praha',
      date: '2025-11-12',
      time: '14:45',
      players: [
        'Mandous', 'Vlček', 'Ogbu', 'Holeš', 'Provod',
        'Zafeiris', 'Dorley', 'Douděra', 'Wallem',
        'Chytil', 'Schranz'
      ],
      stadiumInfo: {
        name: 'Eden Arena',
        city: 'Praga',
        capacity: '19.370'
      }
    },
    away: {
      name: 'Arsenal',
      date: '2025-11-12',
      time: '14:45',
      players: [
        'Raya', 'White', 'Saliba', 'Gabriel', 'Zinchenko',
        'Rice', 'Partey', 'Ødegaard', 'Saka',
        'Jesus', 'Martinelli'
      ],
      stadiumInfo: {
        name: 'Eden Arena',
        city: 'Praga',
        capacity: '19.370'
      }
    }
  },
  'liverpool-real-1': {
    home: {
      name: 'Liverpool',
      date: '2025-11-12',
      time: '17:00',
      players: [
        'Alisson', 'Alexander-Arnold', 'Van Dijk', 'Konaté', 'Robertson',
        'Mac Allister', 'Szoboszlai', 'Jones', 'Salah',
        'Núñez', 'Díaz'
      ],
      stadiumInfo: {
        name: 'Anfield',
        city: 'Liverpool',
        capacity: '53.394'
      }
    },
    away: {
      name: 'Real Madrid',
      date: '2025-11-12',
      time: '17:00',
      players: [
        'Kepa', 'Carvajal', 'Rüdiger', 'Alaba', 'Mendy',
        'Valverde', 'Tchouaméni', 'Kroos', 'Bellingham',
        'Vinícius Jr.', 'Rodrygo'
      ],
      stadiumInfo: {
        name: 'Anfield',
        city: 'Liverpool',
        capacity: '53.394'
      }
    }
  },
  'la-nycfc-1': {
    home: {
      name: 'LA Galaxy',
      date: '2025-11-12',
      time: '22:00',
      players: [
        'Bond', 'Calegari', 'Zabaleta', 'Mavinga', 'Aude',
        'Puig', 'Delgado', 'Fagundez', 'Álvarez',
        'Joveljić', 'Pochettino'
      ],
      stadiumInfo: {
        name: 'Dignity Health Sports Park',
        city: 'Carson',
        capacity: '27.000'
      }
    },
    away: {
      name: 'New York City FC',
      date: '2025-11-12',
      time: '22:00',
      players: [
        'Barraza', 'Gray', 'Martins', 'Alfaro', 'O\'Toole',
        'Parks', 'Perea', 'Rodríguez', 'Magno',
        'Segal', 'Jasson'
      ],
      stadiumInfo: {
        name: 'Dignity Health Sports Park',
        city: 'Carson',
        capacity: '27.000'
      }
    }
  },
  'intermiami-atlanta-1': {
    home: {
      name: 'Inter Miami',
      date: '2025-11-12',
      time: '23:30',
      players: [
        'Callender', 'Yedlin', 'Kryvtsov', 'Miller', 'Alba',
        'Busquets', 'Cremaschi', 'Gómez', 'Messi',
        'Martínez', 'Taylor'
      ],
      stadiumInfo: {
        name: 'DRV PNK Stadium',
        city: 'Fort Lauderdale',
        capacity: '21.000'
      }
    },
    away: {
      name: 'Atlanta United',
      date: '2025-11-12',
      time: '23:30',
      players: [
        'Guzan', 'Lennon', 'Robinson', 'Purata', 'Wiley',
        'Sosa', 'Almada', 'Araujo', 'Lobjanidze',
        'Giakoumakis', 'Silva'
      ],
      stadiumInfo: {
        name: 'DRV PNK Stadium',
        city: 'Fort Lauderdale',
        capacity: '21.000'
      }
    }
  }
};

const MatchModal = ({ matchKey, onClose }) => {
  if (!matchKey) return null;

  const match = detailedMatches[matchKey];
  if (!match) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>{match.home.name} <span className="vs-inline">x</span> {match.away.name}</h2>
          <div className="meta">
            <div>{match.home.date} — {match.home.time}</div>
            <div>{match.home.stadiumInfo.name} • {match.home.stadiumInfo.city}</div>
          </div>
        </div>

        <div className="modal-body">
          <div className="team-column">
            <h3>{match.home.name}</h3>
            <ul>
              {match.home.players.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>

          <div className="match-middle">
            <div className="stadium-box">
              <div><strong>Estádio</strong></div>
              <div>{match.home.stadiumInfo.name}</div>
              <div>Capacidade: {match.home.stadiumInfo.capacity}</div>
            </div>
          </div>

          <div className="team-column">
            <h3>{match.away.name}</h3>
            <ul>
              {match.away.players.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
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