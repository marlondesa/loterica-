import React from 'react';

const Cookies = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1>Política de Cookies</h1>
      <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
      
      <h2>1. O que são Cookies</h2>
      <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. 
      Eles ajudam o site a lembrar informações sobre sua visita.</p>
      
      <h2>2. Como Usamos Cookies</h2>
      <p>Utilizamos cookies para:</p>
      <ul>
        <li>Lembrar suas preferências (tema claro/escuro)</li>
        <li>Analisar o tráfego do site</li>
        <li>Personalizar anúncios</li>
        <li>Melhorar a funcionalidade do site</li>
      </ul>
      
      <h2>3. Tipos de Cookies</h2>
      
      <h3>Cookies Essenciais</h3>
      <p>Necessários para o funcionamento básico do site. Não podem ser desabilitados.</p>
      
      <h3>Cookies de Preferências</h3>
      <p>Armazenam suas configurações, como tema escolhido.</p>
      
      <h3>Cookies de Análise</h3>
      <p>Coletam informações sobre como você usa o site (Google Analytics).</p>
      
      <h3>Cookies de Publicidade</h3>
      <p>Usados pelo Google AdSense para personalizar anúncios.</p>
      
      <h2>4. Cookies de Terceiros</h2>
      <p>Utilizamos serviços de terceiros que podem definir cookies:</p>
      <ul>
        <li><strong>Google Analytics:</strong> Para análise de tráfego</li>
        <li><strong>Google AdSense:</strong> Para exibição de anúncios</li>
      </ul>
      
      <h2>5. Gerenciar Cookies</h2>
      <p>Você pode controlar cookies através das configurações do seu navegador:</p>
      <ul>
        <li>Bloquear todos os cookies</li>
        <li>Aceitar apenas cookies de sites específicos</li>
        <li>Excluir cookies existentes</li>
        <li>Receber notificação antes de aceitar cookies</li>
      </ul>
      
      <h2>6. Consequências de Desabilitar Cookies</h2>
      <p>Desabilitar cookies pode afetar:</p>
      <ul>
        <li>Funcionalidade do site</li>
        <li>Personalização de conteúdo</li>
        <li>Lembrança de preferências</li>
      </ul>
      
      <h2>7. Atualizações</h2>
      <p>Esta política pode ser atualizada periodicamente. Recomendamos revisar regularmente.</p>
      
      <h2>8. Contato</h2>
      <p>Para questões sobre cookies, entre em contato conosco.</p>
    </div>
  );
};

export default Cookies;