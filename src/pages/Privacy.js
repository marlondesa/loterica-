import React from 'react';

const Privacy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
      <h1>Política de Privacidade</h1>
      <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
      
      <h2>1. Informações que Coletamos</h2>
      <p>Coletamos informações quando você visita nosso site, incluindo:</p>
      <ul>
        <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
        <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
        <li>Endereço IP e localização aproximada</li>
        <li>Cookies e tecnologias similares</li>
      </ul>
      
      <h2>2. Como Usamos suas Informações</h2>
      <p>Utilizamos as informações coletadas para:</p>
      <ul>
        <li>Melhorar a experiência do usuário</li>
        <li>Analisar o tráfego do site</li>
        <li>Personalizar conteúdo e anúncios</li>
        <li>Garantir a segurança do site</li>
      </ul>
      
      <h2>3. Cookies</h2>
      <p>Utilizamos cookies para melhorar sua experiência. Você pode desabilitar cookies nas configurações do seu navegador.</p>
      
      <h2>4. Google AdSense</h2>
      <p>Este site utiliza Google AdSense para exibir anúncios. O Google pode usar cookies para personalizar anúncios com base em suas visitas anteriores.</p>
      
      <h2>5. Compartilhamento de Dados</h2>
      <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando exigido por lei.</p>
      
      <h2>6. Seus Direitos</h2>
      <p>Você tem o direito de:</p>
      <ul>
        <li>Acessar suas informações pessoais</li>
        <li>Corrigir dados incorretos</li>
        <li>Solicitar exclusão de dados</li>
        <li>Retirar consentimento</li>
      </ul>
      
      <h2>7. Contato</h2>
      <p>Para questões sobre esta política, entre em contato conosco através do nosso formulário de contato.</p>
    </div>
  );
};

export default Privacy;