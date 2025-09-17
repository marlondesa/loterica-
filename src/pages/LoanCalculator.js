import React, { useState } from 'react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    if (amount && rate && months) {
      const principal = parseFloat(amount);
      const monthlyRate = parseFloat(rate) / 100 / 12;
      const numPayments = parseInt(months);
      
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                            (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const totalAmount = monthlyPayment * numPayments;
      const totalInterest = totalAmount - principal;
      
      setResult({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
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
      <h1 className="calculator-title">Calculadora de Financiamento</h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Valor do Empréstimo (R$):
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 100000"
              style={inputStyle}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Taxa de Juros (% ao ano):
            </label>
            <input
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Ex: 12.5"
              style={inputStyle}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Prazo (meses):
            </label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="Ex: 60"
              style={inputStyle}
            />
          </div>
        </div>
        
        <button onClick={calculateLoan} className="btn" style={{ width: '100%', padding: '15px', fontSize: '18px' }}>
          Calcular Financiamento
        </button>
        
        {result && (
          <div style={{ marginTop: '30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{
                padding: '20px',
                backgroundColor: '#3498db',
                color: 'white',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>Parcela Mensal</h3>
                <p style={{ margin: '0', fontSize: '1.8rem', fontWeight: 'bold' }}>R$ {result.monthlyPayment}</p>
              </div>
              
              <div style={{
                padding: '20px',
                backgroundColor: '#27ae60',
                color: 'white',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>Total a Pagar</h3>
                <p style={{ margin: '0', fontSize: '1.8rem', fontWeight: 'bold' }}>R$ {result.totalAmount}</p>
              </div>
              
              <div style={{
                padding: '20px',
                backgroundColor: '#e74c3c',
                color: 'white',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>Total de Juros</h3>
                <p style={{ margin: '0', fontSize: '1.8rem', fontWeight: 'bold' }}>R$ {result.totalInterest}</p>
              </div>
            </div>
          </div>
        )}
        
        <div style={{ marginTop: '40px' }}>
          <h3>Como Funciona</h3>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Sistema Price:</strong> Parcelas fixas com juros compostos, onde no início você paga mais juros e menos amortização.
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Dica:</strong> Compare diferentes prazos e taxas para encontrar a melhor opção para seu orçamento.
            </div>
            <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Importante:</strong> Considere também seguros, taxas administrativas e outros custos do financiamento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;