import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const headerStyle = {
    background: 'linear-gradient(135deg, #003d82 0%, #0056b3 100%)',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const navStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  };

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '15px',
    flexWrap: 'wrap',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    border: '1px solid rgba(255,255,255,0.2)'
  };

  const topBarStyle = {
    background: '#ff6600',
    color: 'white',
    padding: '8px 0',
    textAlign: 'center',
    fontSize: '0.9rem'
  };

  const caixaLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <>
      <div style={topBarStyle}>
        <a 
          href="https://www.caixa.gov.br/Paginas/home-caixa.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          style={caixaLinkStyle}
        >
          Ir para o site da Caixa
        </a>
      </div>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={logoStyle}>
            <img 
              src="/img/logocaixa.png" 
              alt="Loterias CAIXA" 
              style={{
                height: '40px',
                marginRight: '10px',
                verticalAlign: 'middle',
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            Loterias CAIXA
          </Link>
          <ul style={menuStyle}>
            <li><Link to="/calculadoras" style={linkStyle}>Calculadoras</Link></li>
            <li><Link to="/clima" style={linkStyle}>Clima</Link></li>
            <li><Link to="/loteria/megasena" style={linkStyle}>Mega-Sena</Link></li>
            <li><Link to="/loteria/lotofacil" style={linkStyle}>Lotofácil</Link></li>
            <li><Link to="/loteria/quina" style={linkStyle}>Quina</Link></li>
            <li><Link to="/loteria/lotomania" style={linkStyle}>Lotomania</Link></li>
            <li><Link to="/loteria/timemania" style={linkStyle}>Timemania</Link></li>
            <li><Link to="/loteria/duplasena" style={linkStyle}>Dupla Sena</Link></li>
            <li><Link to="/loteria/federal" style={linkStyle}>Federal</Link></li>
            <li><Link to="/loteria/diadesorte" style={linkStyle}>Dia de Sorte</Link></li>
            <li><Link to="/loteria/supersete" style={linkStyle}>Super Sete</Link></li>
            <li><Link to="/loteria/maismilionaria" style={linkStyle}>+Milionária</Link></li>
            <li>
              <button 
                onClick={toggleTheme} 
                style={{...linkStyle, background: 'none', border: 'none', cursor: 'pointer'}}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;