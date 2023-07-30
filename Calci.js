import React, { useState } from 'react'
import './Calci.css'
function Calci() {
  const [result,setResult]= useState("");

  const handleButton = (e) =>{
  setResult(result.concat(e.target.name));
}

  const clear = () => {
    setResult("");
  }
  const backspace = () =>{
    setResult(result.slice(0,-1));
  }
  const evaluate = () =>{
    try{
      setResult(eval(result).toString());
    }catch(err){
        setResult("Invalid Expression");
    }
    

  }
  return (
    <body>
    <div id='container'>
    <h1>CALCULATOR</h1>
        <div id="screen">
          <form><input id='output' type="text" value={result}></input></form>
            </div>
            <div id="buttons">
                <button  onClick={clear}id="clear">clear</button>
                <button  onClick={backspace} id="c">c</button>
                <button onClick={handleButton} name="/">/</button>
                <button onClick={handleButton} name="7">7</button>
                <button onClick={handleButton} name="8">8</button>
                <button onClick={handleButton} name="9">9</button>
                <button onClick={handleButton} name="*">x</button>
                <button onClick={handleButton} name="4">4</button>
                <button onClick={handleButton} name="5">5</button>
                <button onClick={handleButton} name="6">6</button>
                <button onClick={handleButton} name="-">-</button>
                <button onClick={handleButton} name="1">1</button>
                <button onClick={handleButton} name="2">2</button>
                <button onClick={handleButton} name="3">3</button>
                <button onClick={handleButton} name="+">+</button>
                <button onClick={handleButton} name="0">0</button>
                <button onClick={handleButton} name='.'>.</button>
                <button onClick={evaluate} id="res">=</button>
            
        </div>
    </div>
    </body>
  )
}

export default Calci