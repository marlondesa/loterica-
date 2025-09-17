import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Resultados da Loteria',
      description: 'Confira os últimos resultados da Mega-Sena, Lotofácil e outros sorteios em tempo real.',
      path: '/servicos/loteria',
      icon: '🎲'
    }
  ];

  return (
    <div>
      <div className="calculator-container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
          🔧 Serviços
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          Recursos e funcionalidades úteis para o seu dia a dia!
        </p>
      </div>

      <div className="calculator-grid">
        {services.map((service, index) => (
          <Link key={index} to={service.path} className="calculator-card">
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{service.description}</p>
            <button className="btn" style={{ marginTop: '15px', width: '100%' }}>
              Acessar Recurso
            </button>
          </Link>
        ))}
      </div>

      <div className="calculator-container" style={{ marginTop: '3rem' }}>
        <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--card-bg)', borderRadius: '10px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Mais funcionalidades em breve!</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Estamos trabalhando para adicionar mais recursos e funcionalidades úteis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;