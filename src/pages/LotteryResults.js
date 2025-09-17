import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

const LotteryResults = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const lotteryInfo = {
    megasena: { name: 'Mega-Sena', color: '#209869', icon: '💰' },
    lotofacil: { name: 'Lotofácil', color: '#930089', icon: '🍀' },
    quina: { name: 'Quina', color: '#260085', icon: '⭐' },
    lotomania: { name: 'Lotomania', color: '#F78100', icon: '🎯' },
    timemania: { name: 'Timemania', color: '#00FF48', icon: '⚽' },
    duplasena: { name: 'Dupla Sena', color: '#A61324', icon: '🎲' },
    federal: { name: 'Federal', color: '#103099', icon: '🏆' },
    diadesorte: { name: 'Dia de Sorte', color: '#CB852F', icon: '☀️' },
    supersete: { name: 'Super Sete', color: '#A8CF45', icon: '7️⃣' },
    maismilionaria: { name: '+Milionária', color: '#FF8C00', icon: '💎' }
  };

  const lottery = lotteryInfo[id];

  useEffect(() => {
    if (!id || !lottery) {
      setError('Loteria não encontrada');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Busca resultado mais recente
        const latestResponse = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${id}/latest`);
        if (latestResponse.ok) {
          const latestData = await latestResponse.json();
          setResult(latestData);
        } else {
          throw new Error('Erro ao buscar resultado mais recente');
        }

        // Busca histórico
        const historyResponse = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${id}`);
        if (historyResponse.ok) {
          const historyData = await historyResponse.json();
          setHistory(historyData.slice(0, 10));
        }
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
        setError('Erro ao carregar dados da loteria');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível';
    
    let date;
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/');
      date = new Date(year, month - 1, day);
    } else {
      date = new Date(dateString);
    }
    
    return date && !isNaN(date) ? date.toLocaleDateString('pt-BR') : dateString;
  };

  const formatCurrency = (value) => {
    if (!value || isNaN(value)) return 'A definir';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading) {
    return (
      <div className="lottery-results">
        <div className="container">
          <div className="loading">Carregando resultados...</div>
        </div>
      </div>
    );
  }

  if (error || !lottery) {
    return (
      <div className="lottery-results">
        <div className="container">
          <div className="error">
            <h1>Erro</h1>
            <p>{error || 'Loteria não encontrada'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lottery-results">
      <div className="container">
        {/* Header da Loteria */}
        <div className="lottery-header" style={{ backgroundColor: lottery.color }}>
          <div className="header-content">
            <span className="lottery-icon">{lottery.icon}</span>
            <div>
              <h1>{lottery.name}</h1>
              <p>Resultados oficiais e histórico completo</p>
            </div>
          </div>
        </div>

        {/* Anúncio Inline - Horizontal */}
        <AdBanner position="inline" type="horizontal" />
        
        {/* Resultado Mais Recente */}
        {result && (
          <div className="latest-result">
            <h2>Último Resultado</h2>
            <div className="result-card" style={{ borderColor: lottery.color }}>
              <div className="result-header">
                <div className="contest-info">
                  <span className="contest-number">Concurso {result.concurso}</span>
                  <span className="contest-date">{formatDate(result.data || result.dataApuracao)}</span>
                </div>
              </div>
              
              <div className="numbers-section">
                <h3>Números Sorteados</h3>
                <div className="numbers">
                  {(result.dezenas || result.listaDezenas || []).map((number, index) => (
                    <span key={index} className="number-ball" style={{ backgroundColor: lottery.color }}>
                      {String(number).padStart(2, '0')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prize-section">
                <div className="prize-item">
                  <span className="prize-label">Próximo Prêmio</span>
                  <span className="prize-value">
                    {result.estimativaPremio || 
                     (result.valorEstimadoProximoConcurso ? formatCurrency(result.valorEstimadoProximoConcurso) : 'A definir')
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Anúncio Entre Seções - Vertical */}
        <AdBanner position="sidebar" type="vertical" />
        
        {/* Anúncio Quadrado */}
        <AdBanner position="square" type="square" />
        
        {/* Histórico */}
        {history.length > 0 && (
          <div className="history-section">
            <h2>Histórico de Resultados</h2>
            <div className="history-grid">
              {history.map((item, index) => (
                <div key={index} className="history-item">
                  <div className="history-header">
                    <span className="history-contest">Concurso {item.concurso}</span>
                    <span className="history-date">{formatDate(item.data || item.dataApuracao)}</span>
                  </div>
                  <div className="history-numbers">
                    {(item.dezenas || item.listaDezenas || []).map((number, idx) => (
                      <span key={idx} className="history-ball" style={{ backgroundColor: lottery.color }}>
                        {String(number).padStart(2, '0')}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Informações da Loteria */}
        <div className="lottery-info">
          <h2>Sobre {lottery.name}</h2>
          <div className="info-content">
            <p>Confira os resultados oficiais e histórico completo da {lottery.name}. 
            Todos os dados são obtidos de fontes oficiais da Caixa Econômica Federal.</p>
            
            <div className="important-note">
              <h3>⚠️ Importante</h3>
              <ul>
                <li>Para apostas oficiais, visite uma casa lotérica autorizada</li>
                <li>Sempre confirme os resultados no site oficial da CAIXA</li>
                <li>Jogue com responsabilidade - proibido para menores de 18 anos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryResults;