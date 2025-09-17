import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      
      let category = '';
      let color = '';
      
      if (bmi < 18.5) {
        category = 'Abaixo do peso';
        color = '#3498db';
      } else if (bmi < 25) {
        category = 'Peso normal';
        color = '#27ae60';
      } else if (bmi < 30) {
        category = 'Sobrepeso';
        color = '#f39c12';
      } else {
        category = 'Obesidade';
        color = '#e74c3c';
      }
      
      setResult({ bmi, category, color });
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
      <h1 className="calculator-title">Calculadora de IMC</h1>
      
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Peso (kg):
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Altura (cm):
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 175"
            style={inputStyle}
          />
        </div>
        
        <button onClick={calculateBMI} className="btn" style={{ width: '100%', padding: '15px', fontSize: '18px' }}>
          Calcular IMC
        </button>
        
        {result && (
          <div style={{
            marginTop: '30px',
            padding: '25px',
            backgroundColor: result.color,
            color: 'white',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>{result.bmi}</h2>
            <h3 style={{ margin: '0 0 10px 0' }}>{result.category}</h3>
            <p>Seu Índice de Massa Corporal</p>
          </div>
        )}
        
        <div style={{ marginTop: '40px' }}>
          <h3>Tabela de Classificação do IMC</h3>
          <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#ecf0f1', borderRadius: '6px' }}>
              <span>Abaixo de 18,5</span>
              <span style={{ color: '#3498db', fontWeight: 'bold' }}>Abaixo do peso</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#ecf0f1', borderRadius: '6px' }}>
              <span>18,5 - 24,9</span>
              <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Peso normal</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#ecf0f1', borderRadius: '6px' }}>
              <span>25,0 - 29,9</span>
              <span style={{ color: '#f39c12', fontWeight: 'bold' }}>Sobrepeso</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#ecf0f1', borderRadius: '6px' }}>
              <span>Acima de 30,0</span>
              <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Obesidade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;