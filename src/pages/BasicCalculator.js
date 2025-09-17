import React, { useState } from 'react';

const BasicCalculator = () => {
  const [display, setDisplay] = useState('');

  const insert = (value) => setDisplay(display + value);
  const clearDisplay = () => setDisplay('');
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Erro');
    }
  };

  const buttonStyle = {
    height: '60px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  const numberStyle = {
    ...buttonStyle,
    backgroundColor: '#ecf0f1',
    color: '#2c3e50'
  };

  const operatorStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
    color: 'white'
  };

  const equalsStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: 'white',
    gridColumn: 'span 2'
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculadora Básica</h1>
      
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          value={display}
          disabled
          style={{
            width: '100%',
            height: '80px',
            fontSize: '24px',
            textAlign: 'right',
            marginBottom: '20px',
            padding: '0 20px',
            border: '2px solid #bdc3c7',
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px'
        }}>
          <button onClick={clearDisplay} style={{...operatorStyle, backgroundColor: '#95a5a6'}}>C</button>
          <button onClick={() => insert('/')} style={operatorStyle}>÷</button>
          <button onClick={() => insert('*')} style={operatorStyle}>×</button>
          <button onClick={() => setDisplay(display.slice(0, -1))} style={{...operatorStyle, backgroundColor: '#95a5a6'}}>⌫</button>
          
          <button onClick={() => insert('7')} style={numberStyle}>7</button>
          <button onClick={() => insert('8')} style={numberStyle}>8</button>
          <button onClick={() => insert('9')} style={numberStyle}>9</button>
          <button onClick={() => insert('-')} style={operatorStyle}>-</button>
          
          <button onClick={() => insert('4')} style={numberStyle}>4</button>
          <button onClick={() => insert('5')} style={numberStyle}>5</button>
          <button onClick={() => insert('6')} style={numberStyle}>6</button>
          <button onClick={() => insert('+')} style={operatorStyle}>+</button>
          
          <button onClick={() => insert('1')} style={numberStyle}>1</button>
          <button onClick={() => insert('2')} style={numberStyle}>2</button>
          <button onClick={() => insert('3')} style={numberStyle}>3</button>
          <button onClick={calculate} style={{...equalsStyle, gridRow: 'span 2'}}>=</button>
          
          <button onClick={() => insert('0')} style={{...numberStyle, gridColumn: 'span 2'}}>0</button>
          <button onClick={() => insert('.')} style={numberStyle}>,</button>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>Como usar a Calculadora Básica</h3>
        <p>Digite os números e operações usando os botões ou o teclado. Pressione = para calcular o resultado.</p>
      </div>
    </div>
  );
};

export default BasicCalculator;