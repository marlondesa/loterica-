import React, { useState } from 'react';

const ScientificCalculator = () => {
  const [display, setDisplay] = useState('');

  const insert = (value) => setDisplay(display + value);
  const clearDisplay = () => setDisplay('');
  
  const calculate = () => {
    try {
      let expression = display
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/√/g, 'Math.sqrt')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/\^/g, '**');
      
      setDisplay(eval(expression).toString());
    } catch {
      setDisplay('Erro');
    }
  };

  const buttonStyle = {
    height: '50px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '6px',
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

  const functionStyle = {
    ...buttonStyle,
    backgroundColor: '#9b59b6',
    color: 'white'
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculadora Científica</h1>
      
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input
          type="text"
          value={display}
          disabled
          style={{
            width: '100%',
            height: '60px',
            fontSize: '18px',
            textAlign: 'right',
            marginBottom: '20px',
            padding: '0 15px',
            border: '2px solid #bdc3c7',
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '8px'
        }}>
          <button onClick={clearDisplay} style={{...operatorStyle, backgroundColor: '#e74c3c'}}>C</button>
          <button onClick={() => setDisplay(display.slice(0, -1))} style={{...operatorStyle, backgroundColor: '#95a5a6'}}>⌫</button>
          <button onClick={() => insert('(')} style={operatorStyle}>(</button>
          <button onClick={() => insert(')')} style={operatorStyle}>)</button>
          <button onClick={() => insert('/')} style={operatorStyle}>÷</button>
          <button onClick={() => insert('*')} style={operatorStyle}>×</button>
          
          <button onClick={() => insert('sin(')} style={functionStyle}>sin</button>
          <button onClick={() => insert('cos(')} style={functionStyle}>cos</button>
          <button onClick={() => insert('tan(')} style={functionStyle}>tan</button>
          <button onClick={() => insert('7')} style={numberStyle}>7</button>
          <button onClick={() => insert('8')} style={numberStyle}>8</button>
          <button onClick={() => insert('9')} style={numberStyle}>9</button>
          
          <button onClick={() => insert('log(')} style={functionStyle}>log</button>
          <button onClick={() => insert('ln(')} style={functionStyle}>ln</button>
          <button onClick={() => insert('^')} style={functionStyle}>x^y</button>
          <button onClick={() => insert('4')} style={numberStyle}>4</button>
          <button onClick={() => insert('5')} style={numberStyle}>5</button>
          <button onClick={() => insert('6')} style={numberStyle}>6</button>
          
          <button onClick={() => insert('√(')} style={functionStyle}>√</button>
          <button onClick={() => insert('π')} style={functionStyle}>π</button>
          <button onClick={() => insert('e')} style={functionStyle}>e</button>
          <button onClick={() => insert('1')} style={numberStyle}>1</button>
          <button onClick={() => insert('2')} style={numberStyle}>2</button>
          <button onClick={() => insert('3')} style={numberStyle}>3</button>
          
          <button onClick={() => insert('+')} style={{...operatorStyle, gridColumn: 'span 2'}}>+</button>
          <button onClick={() => insert('-')} style={{...operatorStyle, gridColumn: 'span 2'}}>-</button>
          <button onClick={calculate} style={{...operatorStyle, backgroundColor: '#e74c3c', gridRow: 'span 2'}}>=</button>
          
          <button onClick={() => insert('0')} style={{...numberStyle, gridColumn: 'span 3'}}>0</button>
          <button onClick={() => insert('.')} style={numberStyle}>,</button>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Funções Disponíveis</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Trigonométricas:</strong><br />
            sin, cos, tan
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Logarítmicas:</strong><br />
            log (base 10), ln (natural)
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Constantes:</strong><br />
            π (pi), e (euler)
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Operações:</strong><br />
            √ (raiz), ^ (potência)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator;