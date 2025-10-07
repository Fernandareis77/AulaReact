import { useState } from "react";

export default function Exercicio1() {

  //variavel de estado para os campos de formulario
  const[numero, setNumero] = useState(); 
  
  //variavel de estado para o resultado
  const[resultado, setResultado] = useState();
  
  //função para calcular o quadrado ou o cubo
  function calcular()
  {

    let quadrado, cubo;

    quadrado= Number(numero) * Number(numero);
    cubo = Number(numero) * Number(numero) * Number(numero);

    setResultado("Quadrado: " + quadrado + " Cubo: " + cubo);

  }
    
  
  return (
      <div>
        
        <h1> Exercício 1 </h1>
  
      <div className="conteudo">
  
        <h3> Cálculo do Quadrado/Cubo </h3>
          
        <form>
            
        <p>
          Digite um número: <br />
          <input type="text" value={numero}
          onChange={(e) => setNumero(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 1" onClick={calcular} />
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Número é {numero} <br />
             {resultado}
        </p>
  
        <p>
          <a href="/"> Voltar </a>
        </p>
  
        </form>
          
  
        </div>


      </div>
  );
}
  