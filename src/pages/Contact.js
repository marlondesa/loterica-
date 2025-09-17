import React from 'react';

const Contact = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Contato</h1>
      
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <h2>Entre em Contato</h2>
        <p>Para dúvidas, sugestões ou questões sobre o site, utilize as informações abaixo:</p>
        
        <div style={{ margin: '2rem 0' }}>
          <h3>📧 Email</h3>
          <p>contato@loteriascaixa-resultados.com.br</p>
        </div>
        
        <div style={{ margin: '2rem 0' }}>
          <h3>⏰ Horário de Atendimento</h3>
          <p>Segunda a Sexta: 9h às 18h</p>
        </div>
        
        <div style={{ margin: '2rem 0' }}>
          <h3>🏦 Site Oficial</h3>
          <p>Para apostas oficiais, visite: 
            <a href="https://www.caixa.gov.br" target="_blank" rel="noopener noreferrer" 
               style={{ color: '#003d82', marginLeft: '5px' }}>
              www.caixa.gov.br
            </a>
          </p>
        </div>
      </div>
      
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '10px' }}>
        <h2>⚠️ Importante</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li>Este site não é afiliado à Caixa Econômica Federal</li>
          <li>Não realizamos apostas nem vendemos bilhetes</li>
          <li>Para apostas oficiais, procure uma casa lotérica autorizada</li>
          <li>Os resultados são obtidos de fontes públicas oficiais</li>
          <li>Respondemos em até 48 horas úteis</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;