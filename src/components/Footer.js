import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    background: '#003d82',
    color: 'white',
    padding: '40px 20px',
    marginTop: '40px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginBottom: '30px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    margin: '5px 0',
    opacity: 0.8,
    transition: 'opacity 0.3s ease'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#ff6600'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div>
            <h3 style={titleStyle}>Loterias CAIXA</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
              Resultados oficiais das Loterias CAIXA atualizados em tempo real. 
              Confira os números sorteados e próximos prêmios.
            </p>
          </div>
          
          <div>
            <h4 style={titleStyle}>Modalidades</h4>
            <Link to="/loteria/megasena" style={linkStyle}>Mega-Sena</Link>
            <Link to="/loteria/lotofacil" style={linkStyle}>Lotofácil</Link>
            <Link to="/loteria/quina" style={linkStyle}>Quina</Link>
            <Link to="/loteria/lotomania" style={linkStyle}>Lotomania</Link>
            <Link to="/loteria/timemania" style={linkStyle}>Timemania</Link>
          </div>
          
          <div>
            <h4 style={titleStyle}>Ferramentas</h4>
            <Link to="/calculadoras" style={linkStyle}>Calculadoras</Link>
            <Link to="/clima" style={linkStyle}>Previsão do Tempo</Link>
            <a href="https://www.caixa.gov.br" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Site Oficial CAIXA
            </a>
          </div>
          
          <div>
            <h4 style={titleStyle}>Informações Legais</h4>
            <Link to="/privacidade" style={linkStyle}>Política de Privacidade</Link>
            <Link to="/termos" style={linkStyle}>Termos de Uso</Link>
            <Link to="/cookies" style={linkStyle}>Política de Cookies</Link>
            <Link to="/contato" style={linkStyle}>Contato</Link>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '10px' }}>
            © 2024 Loterias CAIXA - Resultados Oficiais. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '12px', opacity: 0.6, lineHeight: '1.5' }}>
            Este site não é afiliado à Caixa Econômica Federal. Os resultados são obtidos de fontes públicas oficiais. 
            Para apostas oficiais, visite uma casa lotérica autorizada ou o site oficial da CAIXA. 
            Jogue com responsabilidade. Proibido para menores de 18 anos.
          </p>
          <p style={{ fontSize: '12px', opacity: 0.6, marginTop: '10px' }}>
            Desenvolvido com ❤️ para informar sobre as Loterias CAIXA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;