import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');

  const calculatePercentage = () => {
    if (value && percentage) {
      const result = (parseFloat(value) * parseFloat(percentage)) / 100;
      setResult(result.toFixed(2));
    }
  };

  const calculateDiscount = () => {
    if (value && percentage) {
      const discount = (parseFloat(value) * parseFloat(percentage)) / 100;
      const final = parseFloat(value) - discount;
      setResult(`Desconto: R$ ${discount.toFixed(2)} | Final: R$ ${final.toFixed(2)}`);
    }
  };

  const calculateIncrease = () => {
    if (value && percentage) {
      const increase = (parseFloat(value) * parseFloat(percentage)) / 100;
      const final = parseFloat(value) + increase;
      setResult(`Aumento: R$ ${increase.toFixed(2)} | Final: R$ ${final.toFixed(2)}`);
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
      <h1 className="calculator-title">Calculadora de Porcentagem</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Valor:
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ex: 1000"
              style={inputStyle}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Porcentagem (%):
            </label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Ex: 15"
              style={inputStyle}
            />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '20px' }}>
          <button onClick={calculatePercentage} className="btn">
            Calcular %
          </button>
          <button onClick={calculateDiscount} className="btn btn-secondary">
            Com Desconto
          </button>
          <button onClick={calculateIncrease} className="btn" style={{ backgroundColor: '#27ae60' }}>
            Com Aumento
          </button>
        </div>
        
        {result && (
          <div style={{
            padding: '20px',
            backgroundColor: '#ecf0f1',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            Resultado: {result}
          </div>
        )}
        
        <div style={{ marginTop: '40px' }}>
          <h3>Exemplos de Uso</h3>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Calcular Porcentagem:</strong> Quanto é 15% de R$ 1.000?
              <br />
              <small>Resultado: R$ 150,00</small>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Calcular Desconto:</strong> Produto de R$ 500 com 20% de desconto
              <br />
              <small>Desconto: R$ 100,00 | Preço final: R$ 400,00</small>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Calcular Aumento:</strong> Salário de R$ 2.000 com aumento de 10%
              <br />
              <small>Aumento: R$ 200,00 | Novo salário: R$ 2.200,00</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;