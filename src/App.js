import './App.css';
import { Button } from './components/Button';
import { ButtonNumeros } from './components/Button';
import React, { useState } from 'react';



function App() {

  const [expresion, setExpresion] = useState('');

  const handleChange = (event) => {
    setExpresion(event.target.value);
  };

  const handleClick = (valor) => {
    if (valor === '=') {
      const resultado = eval(expresion);
      if (isNaN(resultado) || !isFinite(resultado)) {
        setExpresion('Error');
      } else {
        setExpresion(resultado.toString());
      }
    } else if (valor === 'C') {
      setExpresion(' ');
    } else {
      setExpresion((prevExpresion) => prevExpresion + valor);
    }
  }
  return (
    <div className='container'>
      <table className='tabla'>
        <thead>
          <tr>
            <td colSpan={4}>
              <input type='text' readOnly value={expresion} onChange={handleChange} />
              
            </td>
          </tr>
          <br></br>
        </thead>
        <tbody>
          <tr>
            <td>
              <ButtonNumeros valores='7'
/*               fn = {handleClick('7')}
 */              fn={() => handleClick('7')}
              />
            </td>
            <td>
              <ButtonNumeros valores='8'
              fn={() => handleClick('8')}
              />
            </td>
            <td>
              <ButtonNumeros valores='9'
              fn={() => handleClick('9')}      
              />
            </td>
            <td>
              <Button operador='/' 
              fn={() => handleClick('/')}             
              />
            </td>
          </tr>
          <tr>
            <td>
              <ButtonNumeros valores='4'
              fn={() => handleClick('4')}             
              />
            </td>
            <td>
              <ButtonNumeros valores='5'
              fn={() => handleClick('5')}
              
              />
            </td>
            <td>
              <ButtonNumeros valores='6'
              fn={() => handleClick('6')}             
              />
            </td>
            <td>
              <Button operador='*'
              fn={() => handleClick('*')}              
              />
            </td>
          </tr>
          <tr>
            <td>
              <ButtonNumeros valores='1'
              fn={() => handleClick('1')}
              />
            </td>
            <td>
              <ButtonNumeros valores='2'
              fn={() => handleClick('2')}             
              />
            </td>
            <td>
              <ButtonNumeros valores='3'
              fn={() => handleClick('3')}             
              />
            </td>
            <td>
              <Button operador='-'
              fn={() => handleClick('-')}             
              />
            </td>
          </tr>
          <tr>
            <td>
              <ButtonNumeros valores='0'
/*               className='btn btn-block'

 */           
              fn={() => handleClick('0')}
            />
            </td>
            <td>
              <Button operador='.' 
              fn={() => handleClick('.')}              
              />
            </td>
            <td rowSpan={2}>
              <Button operador='+'
              fn={() => handleClick('+')}              
              />
            </td>
            <td>
             < Button operador='='
              fn={() => handleClick('=')}
           
             />
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
