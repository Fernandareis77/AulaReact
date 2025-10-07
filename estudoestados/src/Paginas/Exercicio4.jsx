import { useState } from "react";

export default function Exercicio4() {

  const[base, setBase] = useState(); 
  const[altura, setAltura] = useState();
  const[area, setArea] = useState();
  
  function calcular()
  {

    let area;

    area= (Number(base) *  Number(altura))/2 ;
    setArea("A Área do Triângulo é: " + area );

  }

    return (
      <div>
        
        <h1> Exercício 4 </h1>
  
      <div className="conteudo">

        <h3> Área Triângulo </h3>
  
        <form>
            
        <p>
          Digite o valor da Base: <br />
          <input type="number" value={base}
          onChange={(e) => setBase(e.target.value)} />
        </p>

        <p>
          Digite o valor da Altura <br />
          <input type="number" value={altura}
          onChange={(e) => setAltura(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 4" onClick={calcular} />
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Valor da Base: {base} <br />
             Valor da Altura: {altura} <br />
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