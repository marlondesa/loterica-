import React, { useEffect } from 'react';

const AdBanner = ({ position, type = 'vertical', format = 'auto' }) => {
  // Slots específicos para cada tipo de anúncio
  const getAdSlot = () => {
    switch (type) {
      case 'horizontal': return '5981601056';
      case 'square': return '2249351557';
      case 'vertical':
      default: return '4947667081';
    }
  };
  useEffect(() => {
    try {
      // Carrega anúncios do AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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
      case 'square':
        return {
          width: '300px',
          height: '300px',
          maxWidth: '100%',
          margin: '20px auto',
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

  // Anúncio Google AdSense - Produção
  return (
    <div style={getAdStyle()}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6389444704025042"
        data-ad-slot={getAdSlot()}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;