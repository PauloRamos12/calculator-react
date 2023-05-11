import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      setHistory([...history, { expression: input, result }]);
    } catch (error) {
      alert('Erro: Expressão inválida!');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operator" onClick={() => handleButtonClick('*')}>×</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operator" onClick={() => handleButtonClick('-')}>−</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="button operator" onClick={() => handleEquals()}>=</button>
        <button className="button operator" onClick={() => handleButtonClick('/')}>÷</button>
      </div>
      <div className="button-row">
        <button className="button clear" onClick={() => handleClear()}>C</button>
      </div>
      {history.length > 0 && (
        <div className="history">
          <h2>Histórico de Cálculos:</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
