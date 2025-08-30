import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [value, setValue] = useState("")

  // To display the expression
  const display = (e) => {
    setValue(value + e.target.value)
  }

  // To delete last value in input box
  const delete_button = () => {
    setValue(value.toString().slice(0,-1))
  }
  
  // To clear all the values in input box
  const clear_button = () => {
    setValue("")
  }

  // To display the result of the expression  
  const sum = () => {
    try {
      var result = eval(value);
    
      if (typeof result === "number" && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(4)); // you can change 4 to 2 or 3
      }

      setValue(result.toString());
    } catch (error) {
      alert("Invalid Expression");
      setValue(""); 
    }
  }
  
  return (
    <div className='container'>
      <div className='calculator'>
        <form>
          <div className='display'>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value='AC' onClick={clear_button} />
            <input type="button" value='DE' onClick={delete_button}/>
            <input type="button" value='.' onClick={display}/>
            <input type="button" value='/' onClick={display}/>
          </div>   
          <div>
            <input type="button" value='7' onClick={display}/>
            <input type="button" value='8' onClick={display}/>
            <input type="button" value='9' onClick={display}/>
            <input type="button" value='*' onClick={display}/>
          </div>  
          <div>
            <input type="button" value='4' onClick={display}/>
            <input type="button" value='5' onClick={display}/>
            <input type="button" value='6' onClick={display}/>
            <input type="button" value='-' onClick={display}/>
          </div> 
          <div>
            <input type="button" value='1' onClick={display}/>
            <input type="button" value='2' onClick={display}/>
            <input type="button" value='3' onClick={display}/>
            <input type="button" value='+' onClick={display}/>
          </div> 
          <div>
            <input type="button" value='00' onClick={display}/>
            <input type="button" value='0' onClick={display}/>
            <input type="button" value='=' onClick={sum} className='equal_button'/>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default App;