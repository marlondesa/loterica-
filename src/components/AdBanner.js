import React, { useEffect } from 'react';

const AdBanner = ({ position, slot, format = 'auto' }) => {
  useEffect(() => {
    try {
      // Carrega anúncios do AdSense
      if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('AdSense não carregado ainda');
    }
  }, []);

  // Estilos para diferentes posições
  const getAdStyle = () => {
    switch (position) {
      case 'top':
        return {
          width: '100%',
          minHeight: '120px',
          maxHeight: '150px',
          margin: '10px 0',
          textAlign: 'center',
          padding: '10px'
        };
      case 'bottom':
        return {
          width: '100%',
          minHeight: '250px',
          margin: '20px 0',
          textAlign: 'center'
        };
      case 'sidebar':
        return {
          width: '300px',
          minHeight: '250px',
          margin: '15px auto',
          textAlign: 'center'
        };
      case 'inline':
        return {
          width: '100%',
          minHeight: '280px',
          margin: '25px 0',
          textAlign: 'center'
        };
      default:
        return {
          width: '100%',
          minHeight: '250px',
          margin: '20px 0',
          textAlign: 'center'
        };
    }
  };

  // Placeholder enquanto AdSense não está configurado
  const placeholderStyle = {
    ...getAdStyle(),
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    border: '2px dashed #dee2e6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6c757d',
    fontSize: '0.9rem',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  // Se não tem slot configurado, mostra placeholder
  if (!slot) {
    return (
      <div style={placeholderStyle}>
        <div style={{ 
          textAlign: 'center', 
          padding: position === 'top' ? '10px' : '20px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📢</div>
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>
            Espaço para Google AdSense
          </p>
          <small style={{ 
            opacity: 0.7,
            display: 'block',
            marginTop: '5px',
            fontSize: position === 'top' ? '0.75rem' : '0.8rem'
          }}>
            {position === 'top' && 'Banner Superior'}
            {position === 'bottom' && 'Banner Inferior'}
            {position === 'sidebar' && 'Sidebar'}
            {position === 'inline' && 'Anúncio Inline'}
          </small>
          <div style={{ 
            marginTop: '10px', 
            fontSize: '0.8rem', 
            opacity: 0.6,
            wordWrap: 'break-word',
            maxWidth: '100%',
            textAlign: 'center'
          }}>
            Configure o slot no AdBanner.js
          </div>
        </div>
      </div>
    );
  }

  // Anúncio real do AdSense
  return (
    <div style={getAdStyle()}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX" // Substitua pelo seu código
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;