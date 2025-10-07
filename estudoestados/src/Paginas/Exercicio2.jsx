import { useState } from "react";

export default function Exercicio2() {

  const[numero, setNumero] = useState(); 
  const[celsius, setCelsius] = useState();
  
  function calcular()
  {

    let celsius;

    celsius= ((Number(numero)-32)*5)/9;
    setCelsius("A Temperatura em graus Fahrenheit: " + numero + ", Em graus Celsius é " + (celsius.toFixed(2)));

  }

    return (
      <div>
        
        <h1> Exercício 2 </h1>
  
      <div className="conteudo">

        <h3> Temperatura </h3>
  
        <form>
            
        <p>
          Digite a temperatura em graus Fahrenheit: <br />
          <input type="number" value={numero}
          onChange={(e) => setNumero(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 2" onClick={calcular} />
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Número é {numero} <br />
             Resultado: {celsius}
        </p>
  
        <p>
          <a href="/"> Voltar </a>
        </p>
  
        </form>
          
  
      </div>

        
      </div>
  );
}