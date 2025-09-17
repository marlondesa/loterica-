import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

const LotteryHome = () => {
  const [results, setResults] = useState({});
  const [history, setHistory] = useState({});
  const [loading, setLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  const lotteries = [
    { id: 'megasena', name: 'Mega-Sena', color: '#209869', icon: '💰' },
    { id: 'lotofacil', name: 'Lotofácil', color: '#930089', icon: '🍀' },
    { id: 'quina', name: 'Quina', color: '#260085', icon: '⭐' },
    { id: 'lotomania', name: 'Lotomania', color: '#F78100', icon: '🎯' },
    { id: 'timemania', name: 'Timemania', color: '#00FF48', icon: '⚽' },
    { id: 'duplasena', name: 'Dupla Sena', color: '#A61324', icon: '🎲' },
    { id: 'federal', name: 'Federal', color: '#103099', icon: '🏆' },
    { id: 'diadesorte', name: 'Dia de Sorte', color: '#CB852F', icon: '☀️' },
    { id: 'supersete', name: 'Super Sete', color: '#A8CF45', icon: '7️⃣' },
    { id: 'maismilionaria', name: '+Milionária', color: '#FF8C00', icon: '💎' }
  ];

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const allResults = {};
      const allHistory = {};
      
      for (const lottery of lotteries) {
        try {
          // Resultado mais recente
          const response = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${lottery.id}/latest`);
          if (response.ok) {
            const data = await response.json();
            allResults[lottery.id] = data;
          }
          
          // Histórico (últimos 5 concursos)
          const historyResponse = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${lottery.id}`);
          if (historyResponse.ok) {
            const historyData = await historyResponse.json();
            allHistory[lottery.id] = historyData.slice(0, 5);
          }
        } catch (error) {
          console.error(`Erro ao buscar ${lottery.name}:`, error);
        }
      }
      
      setResults(allResults);
      setHistory(allHistory);
      setLoading(false);
    };

    fetchResults();
  }, []);

  const formatCurrency = (value) => {
    if (!value || isNaN(value)) return 'A definir';
    
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível';
    
    // Tenta diferentes formatos de data
    let date;
    if (dateString.includes('/')) {
      // Formato DD/MM/YYYY
      const [day, month, year] = dateString.split('/');
      date = new Date(year, month - 1, day);
    } else if (dateString.includes('-')) {
      // Formato YYYY-MM-DD ou DD-MM-YYYY
      date = new Date(dateString);
    } else {
      date = new Date(dateString);
    }
    
    return date && !isNaN(date) ? date.toLocaleDateString('pt-BR') : dateString;
  };

  return (
    <div className="lottery-home">
      {/* Header Principal */}
      <div className="lottery-hero">
        <div className="hero-content">
          <img 
            src="/img/banner.jpg" 
            alt="Loterias CAIXA" 
            className="hero-banner"
          />
          <p>Resultados oficiais e informações completas</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Modalidades</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Atualizações</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Oficial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anúncio Superior - Horizontal */}
      <AdBanner position="top" type="horizontal" />

      {/* Resultados Principais */}
      <div className="main-results">
        <div className="container">
          <h2>🏆 Últimos Resultados</h2>
          
          {loading ? (
            <div className="loading-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="result-card loading">
                  <div className="loading-shimmer"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="results-grid">
              {lotteries.slice(0, 6).map((lottery) => {
                const result = results[lottery.id];
                return (
                  <div key={lottery.id} className="result-card" style={{ borderColor: lottery.color }}>
                    <div className="card-header" style={{ backgroundColor: lottery.color }}>
                      <span className="lottery-icon">{lottery.icon}</span>
                      <h3>{lottery.name}</h3>
                    </div>
                    
                    <div className="card-content">
                      {result ? (
                        <>
                          <div className="contest-info">
                            <span className="contest-number">Concurso {result.concurso || 'N/A'}</span>
                            <span className="contest-date">{formatDate(result.data || result.dataApuracao)}</span>
                          </div>
                          
                          <div className="numbers">
                            {(result.dezenas || result.listaDezenas || []).map((number, index) => (
                              <span key={index} className="number-ball" style={{ backgroundColor: lottery.color }}>
                                {String(number).padStart(2, '0')}
                              </span>
                            ))}
                          </div>
                          
                          <div className="prize-info">
                            <div className="prize-item">
                              <span className="prize-label">Próximo Prêmio</span>
                              <span className="prize-value">
                                {result.estimativaPremio || 
                                 (result.valorEstimadoProximoConcurso ? formatCurrency(result.valorEstimadoProximoConcurso) : 'A definir')
                                }
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="no-data">
                          <span>Carregando...</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="card-footer">
                      <Link to={`/loteria/${lottery.id}`} className="view-details">
                        Ver Detalhes →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Anúncio Quadrado */}
      <AdBanner position="square" type="square" />

      {/* Botão Histórico */}
      <div className="history-section">
        <div className="container">
          <button 
            onClick={() => setShowHistory(!showHistory)}
            className="history-toggle"
          >
            {showHistory ? '⬆️ Ocultar Histórico' : '📅 Ver Histórico de Resultados Anteriores'}
          </button>
        </div>
      </div>

      {/* Histórico */}
      {showHistory && (
        <div className="history-results">
          <div className="container">
            <h2>📅 Histórico de Resultados</h2>
            <div className="history-grid">
              {lotteries.slice(0, 3).map((lottery) => {
                const lotteryHistory = history[lottery.id] || [];
                return (
                  <div key={lottery.id} className="history-card">
                    <h3 style={{ color: lottery.color }}>{lottery.name}</h3>
                    <div className="history-list">
                      {lotteryHistory.map((result, index) => (
                        <div key={index} className="history-item">
                          <div className="history-header">
                            <span className="history-contest">Concurso {result.concurso}</span>
                            <span className="history-date">{formatDate(result.data)}</span>
                          </div>
                          <div className="history-numbers">
                            {(result.dezenas || []).map((number, idx) => (
                              <span key={idx} className="history-ball" style={{ backgroundColor: lottery.color }}>
                                {String(number).padStart(2, '0')}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Anúncio Meio da Página - Horizontal */}
      <AdBanner position="inline" type="horizontal" />

      {/* Todas as Modalidades */}
      <div className="all-lotteries">
        <div className="container">
          <h2>🎯 Todas as Modalidades</h2>
          <div className="lotteries-grid">
            {lotteries.map((lottery) => (
              <Link 
                key={lottery.id} 
                to={`/loteria/${lottery.id}`} 
                className="lottery-item"
                style={{ borderLeftColor: lottery.color }}
              >
                <div className="lottery-icon-large" style={{ color: lottery.color }}>
                  {lottery.icon}
                </div>
                <div className="lottery-info">
                  <h4>{lottery.name}</h4>
                  <p>Ver resultados e estatísticas</p>
                </div>
                <div className="lottery-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Anúncio Quadrado */}
      <AdBanner position="square" type="square" />

      {/* Informações Úteis */}
      <div className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horários dos Sorteios</h3>
              <p>Confira os horários oficiais de cada modalidade e não perca nenhum sorteio.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📊</div>
              <h3>Estatísticas</h3>
              <p>Números mais sorteados, frequência e análises detalhadas de cada jogo.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🎲</div>
              <h3>Como Jogar</h3>
              <p>Aprenda as regras, probabilidades e dicas para cada modalidade de loteria.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🏆</div>
              <h3>Ganhadores</h3>
              <p>Histórico de ganhadores e maiores prêmios já pagos pelas Loterias CAIXA.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Anúncio Inferior - Vertical */}
      <AdBanner position="bottom" type="vertical" />
    </div>
  );
};

export default LotteryHome;