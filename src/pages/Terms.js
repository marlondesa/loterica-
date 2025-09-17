import React from 'react';

const Terms = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1>Termos de Uso</h1>
      <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
      
      <h2>1. Aceitação dos Termos</h2>
      <p>Ao acessar e usar este site, você concorda com estes termos de uso e nossa política de privacidade.</p>
      
      <h2>2. Descrição do Serviço</h2>
      <p>Este site fornece informações sobre resultados das Loterias CAIXA, calculadoras e previsão do tempo. 
      Os dados são obtidos de fontes públicas oficiais.</p>
      
      <h2>3. Isenção de Responsabilidade</h2>
      <p>Este site não é afiliado à Caixa Econômica Federal. Não nos responsabilizamos por:</p>
      <ul>
        <li>Erros ou omissões nas informações</li>
        <li>Perdas decorrentes do uso das informações</li>
        <li>Interrupções no serviço</li>
        <li>Resultados de apostas baseadas nas informações do site</li>
      </ul>
      
      <h2>4. Uso Adequado</h2>
      <p>Você concorda em:</p>
      <ul>
        <li>Usar o site apenas para fins legais</li>
        <li>Não interferir no funcionamento do site</li>
        <li>Não copiar conteúdo sem autorização</li>
        <li>Respeitar os direitos de propriedade intelectual</li>
      </ul>
      
      <h2>5. Apostas e Jogos</h2>
      <p>Para apostas oficiais, visite uma casa lotérica autorizada ou o site oficial da CAIXA. 
      Jogue com responsabilidade. Proibido para menores de 18 anos.</p>
      
      <h2>6. Modificações</h2>
      <p>Reservamos o direito de modificar estes termos a qualquer momento. 
      As alterações entram em vigor imediatamente após a publicação.</p>
      
      <h2>7. Lei Aplicável</h2>
      <p>Estes termos são regidos pelas leis brasileiras.</p>
      
      <h2>8. Contato</h2>
      <p>Para questões sobre estes termos, entre em contato conosco.</p>
    </div>
  );
};

export default Terms;