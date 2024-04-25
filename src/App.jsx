import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(0);
  const [displayCalc, setDisplayCalc] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
        setDisplayCalc(true);
      try {
        if (expression === '') {
          setResult('Error');
        } else {
          const evaluatedResult = eval(expression);
          if (evaluatedResult === Infinity) {
            setResult('Infinity');
          } else if (isNaN(evaluatedResult)) {
            setResult('NaN');
          } else if (evaluatedResult === 0) {
            setResult(0);
          } else {
            setResult(evaluatedResult);
          }
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult(0);
      setDisplayCalc(false);
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} />
      {displayCalc && <h5 className='result'>{result}</h5>}
      <div>
        <div className='buttons'>
          <button type='button' onClick={() => handleButtonClick('7')}>7</button>
          <button type='button' onClick={() => handleButtonClick('8')}>8</button>
          <button type='button' onClick={() => handleButtonClick('9')}>9</button>
          <button type='button' onClick={() => handleButtonClick('+')}>+</button>
          <button type='button' onClick={() => handleButtonClick('4')}>4</button>
          <button type='button' onClick={() => handleButtonClick('5')}>5</button>
          <button type='button' onClick={() => handleButtonClick('6')}>6</button>
          <button type='button' onClick={() => handleButtonClick('-')}>-</button>
          <button type='button' onClick={() => handleButtonClick('1')}>1</button>
          <button type='button' onClick={() => handleButtonClick('2')}>2</button>
          <button type='button' onClick={() => handleButtonClick('3')}>3</button>
          <button type='button' onClick={() => handleButtonClick('*')}>*</button>
          <button type='button' onClick={() => handleButtonClick('/')}>/ </button>
          <button type='button' onClick={() => handleButtonClick('=')}>=</button>
          <button type='button' onClick={() => handleButtonClick('0')}>0</button>
          <button type='button' onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
}