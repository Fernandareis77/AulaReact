import { useState } from "react";

export default function Exercicio5() {

  const[lado, setLado] = useState(); 
  const[area, setArea] = useState();
  
  function calcular()
  {

    let area;

    area= Number(lado) * Number(lado) ;
    setArea("A Área do Quadrado é: " + area );

  }

    return (
      <div>
        
        <h1> Exercício 5 </h1>
  
      <div className="conteudo">
  
        <form>

        <h3> Área Quadrado </h3>
            
        <p>
          Digite o valor do Lado: <br />
          <input type="number" value={lado}
          onChange={(e) => setLado(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 5" onClick={calcular} />
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Valor do Lado: {lado} <br />
             {area}
        </p>
  
        <p>
          <a href="/"> Voltar </a>
        </p>
  
        </form>
          
  
        </div>


      </div>
  );
}