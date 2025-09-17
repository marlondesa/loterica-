import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const birth = new Date(birthDate);
      const today = new Date();
      
      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();
      
      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(totalDays / 7);
      const totalMonths = years * 12 + months;
      
      setResult({
        years,
        months,
        days,
        totalDays,
        totalWeeks,
        totalMonths
      });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    border: '2px solid #bdc3c7',
    borderRadius: '8px',
    marginBottom: '15px'
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculadora de Idade</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Data de Nascimento:
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={inputStyle}
          />
        </div>
        
        <button onClick={calculateAge} className="btn" style={{ width: '100%', padding: '15px', fontSize: '18px' }}>
          Calcular Idade
        </button>
        
        {result && (
          <div style={{ marginTop: '30px' }}>
            <div style={{
              padding: '30px',
              backgroundColor: '#3498db',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <h2 style={{ margin: '0 0 15px 0', fontSize: '2.5rem' }}>
                {result.years} anos, {result.months} meses e {result.days} dias
              </h2>
              <p style={{ margin: '0', fontSize: '1.2rem', opacity: 0.9 }}>Sua idade exata</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#27ae60',
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>{result.totalMonths}</h3>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>Meses totais</p>
              </div>
              
              <div style={{
                padding: '20px',
                backgroundColor: '#f39c12',
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>{result.totalWeeks}</h3>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>Semanas totais</p>
              </div>
              
              <div style={{
                padding: '20px',
                backgroundColor: '#e74c3c',
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>{result.totalDays}</h3>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>Dias totais</p>
              </div>
            </div>
          </div>
        )}
        
        <div style={{ marginTop: '40px' }}>
          <h3>Curiosidades sobre Idades</h3>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Você sabia?</strong> Em média, uma pessoa vive cerca de 700.000 horas ou 42 milhões de minutos.
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Fato interessante:</strong> Seu coração bate aproximadamente 100.000 vezes por dia!
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Dica:</strong> Use esta calculadora para descobrir datas importantes como aniversários de relacionamento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;