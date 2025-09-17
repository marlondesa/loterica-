import { Link } from 'react-router-dom';

const Calculators = () => {
  const calculators = [
    {
      title: 'Calculadora Básica',
      description: 'Operações matemáticas simples: soma, subtração, multiplicação e divisão.',
      path: '/calculadoras/basica',
      icon: '🔢'
    },
    {
      title: 'Calculadora Científica',
      description: 'Funções avançadas: trigonometria, logaritmos, potências e raízes.',
      path: '/calculadoras/cientifica',
      icon: '🧪'
    },
    {
      title: 'Calculadora de IMC',
      description: 'Calcule seu Índice de Massa Corporal e saiba se está no peso ideal.',
      path: '/calculadoras/imc',
      icon: '⚖️'
    },
    {
      title: 'Calculadora de Porcentagem',
      description: 'Calcule porcentagens, descontos, aumentos e variações percentuais.',
      path: '/calculadoras/porcentagem',
      icon: '%'
    },
    {
      title: 'Calculadora Financeira',
      description: 'Simule financiamentos, empréstimos e investimentos.',
      path: '/calculadoras/financeira',
      icon: '💰'
    },
    {
      title: 'Calculadora de Idade',
      description: 'Calcule sua idade exata em anos, meses e dias.',
      path: '/calculadoras/idade',
      icon: '📅'
    }
  ];

  return (
    <div>
      <div className="calculator-container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
          🧮 Calculadoras
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          Todas as calculadoras que você precisa em um só lugar!
        </p>
      </div>

      <div className="calculator-grid">
        {calculators.map((calc, index) => (
          <Link key={index} to={calc.path} className="calculator-card">
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '15px' }}>
              {calc.icon}
            </div>
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>{calc.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{calc.description}</p>
            <button className="btn" style={{ marginTop: '15px', width: '100%' }}>
              Usar Calculadora
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calculators;