import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    padding: '0 20px',
    position: 'relative'
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
    alignItems: 'center',
    margin: 0,
    padding: 0
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#003d82',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000,
    padding: '1.5rem',
    listStyle: 'none',
    margin: 0
  };

  const mobileGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    marginBottom: '1rem'
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

  const mobileItemStyle = {
    ...linkStyle,
    padding: '12px 16px',
    display: 'block',
    textAlign: 'center',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease'
  };

  const mobileButtonStyle = {
    ...mobileItemStyle,
    background: 'rgba(255,102,0,0.2)',
    border: '1px solid #ff6600',
    cursor: 'pointer',
    width: '100%',
    gridColumn: '1 / -1'
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '5px',
    gap: '3px'
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
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
          {/* Desktop Menu */}
        <ul style={menuStyle} className="desktop-menu">
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
        
        {/* Mobile Hamburger */}
        <div 
          style={hamburgerStyle} 
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
        </div>
        
        {/* Mobile Menu */}
        <div style={mobileMenuStyle} className="mobile-menu">
          {/* Ferramentas */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#ff6600', fontSize: '0.9rem', marginBottom: '0.75rem', textAlign: 'center' }}>FERRAMENTAS</h4>
            <div style={mobileGridStyle}>
              <Link to="/calculadoras" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Calculadoras</Link>
              <Link to="/clima" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Clima</Link>
            </div>
          </div>
          
          {/* Loterias */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#ff6600', fontSize: '0.9rem', marginBottom: '0.75rem', textAlign: 'center' }}>LOTERIAS</h4>
            <div style={mobileGridStyle}>
              <Link to="/loteria/megasena" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Mega-Sena</Link>
              <Link to="/loteria/lotofacil" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Lotofácil</Link>
              <Link to="/loteria/quina" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Quina</Link>
              <Link to="/loteria/lotomania" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Lotomania</Link>
              <Link to="/loteria/timemania" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Timemania</Link>
              <Link to="/loteria/duplasena" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Dupla Sena</Link>
              <Link to="/loteria/federal" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Federal</Link>
              <Link to="/loteria/diadesorte" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Dia de Sorte</Link>
              <Link to="/loteria/supersete" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>Super Sete</Link>
              <Link to="/loteria/maismilionaria" style={mobileItemStyle} onClick={() => setIsMenuOpen(false)}>+Milionária</Link>
            </div>
          </div>
          
          {/* Tema */}
          <button 
            onClick={() => { toggleTheme(); setIsMenuOpen(false); }} 
            style={mobileButtonStyle}
          >
            {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </div>
        </nav>
      </header>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-menu {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
        .mobile-menu a:hover {
          background-color: rgba(255,255,255,0.1) !important;
          transform: translateY(-1px);
        }
        .mobile-menu button:hover {
          background-color: rgba(255,102,0,0.4) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 480px) {
          .mobile-menu {
            padding: 1rem !important;
          }
          .mobile-menu h4 {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;