import { useState } from 'react';
import './App.css'

function App() {

  const [result, setResult] = useState(0);
  const [oldResult, setOldResult] = useState(0);
  const [operation, setOperation] = useState();

    function inputNum(e: any) {
      const input = e.target.value

      if (result === 0) {
        setResult(input)
      } else {
        setResult(result + input)
      }
    }

    function clear() {
      setResult(0)
    }

    function operadorHandler(e: any)  {
      const operatorInput = e.target.value;

      setOperation(operatorInput);
      setOldResult(result);
      setResult(0);
    }

    function changeSign() {
      if (result > 0) {
        setResult(-result)
      } else {
        setResult(Math.abs(result))
      }
    }

    function porcentage() {
      setResult(result / 100)
    }

    function calculate() {
      if (operation === '/') {
        setResult(parseFloat(oldResult) / parseFloat(result));
      } else if (operation === 'x') {
        setResult(parseFloat(oldResult) * parseFloat(result));
      } else if (operation === '-') {
        setResult(parseFloat(oldResult) - parseFloat(result));
      } else if (operation === '+') {
        setResult(parseFloat(oldResult) + parseFloat(result));
      }
        }


  return (
    <>
      <div className='App'>
        <div className="calculadora">
          <div className="calculadora-header">
            <div className="calculadora-header-result">
              <th>{result}</th>
            </div>
          </div>
          <div className="caLculadora-body">
            <div className="button">
              <button onClick={clear}>AC</button>
              <button onClick={changeSign}>+/-</button>
              <button onClick={porcentage}>%</button>
              <button className="orange" onClick={operadorHandler} value="/">/</button>
              <button className='gray' onClick={inputNum} value={7}>7</button>
              <button className='gray' onClick={inputNum} value={8}>8</button>
              <button className='gray' onClick={inputNum} value={9}>9</button>
              <button className='orange' onClick={operadorHandler} value={'*'}>*</button>
              <button className='gray' onClick={inputNum} value={4}>4</button>
              <button className='gray' onClick={inputNum} value={5}>5</button>
              <button className='gray' onClick={inputNum} value={6}>6</button>
              <button className='orange' onClick={operadorHandler} value={'-'}>-</button>
              <button className='gray' onClick={inputNum} value={1}>1</button>
              <button className='gray' onClick={inputNum} value={2}>2</button>
              <button className='gray' onClick={inputNum} value={3}>3</button>
              <button className='orange' onClick={operadorHandler} value={'+'}>+</button>
              <button className='gray' onClick={inputNum} value={0}>0</button>
              <button className='gray' onClick={inputNum} value={'.'}>,</button>
              <button className='gray' style={{ visibility: 'hidden' }}>,</button>
              <button className='orange' onClick={calculate} value={'='}>=</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
