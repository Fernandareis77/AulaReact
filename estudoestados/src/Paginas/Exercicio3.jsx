import { useState } from "react";

export default function Exercicio3() {

  const[prestacao, setPrestacao] = useState();
  const[juros, setJuros] = useState(); 
  const[dias, setDias] = useState();
  const[parcela, setParcela] = useState();
  
  function calcular()
  {

    let parcela;

    parcela= Number(prestacao) + ( Number(prestacao) * (( Number(juros) * Number(juros) )/100) * Number(dias) );
    setParcela("Valor da Parcela Atualizado: " + parcela );

  }

    return (
      <div>
        
        <h1> Exercício 3 </h1>
  
      <div className="conteudo">

        <h3> Cálculo de Juros</h3>
  
        <form>
            
        <p>
          Digite o valor da Prestação: <br />
          <input type="number" value={prestacao}
          onChange={(e) => setPrestacao(e.target.value)} />
        </p>

        <p>
          Digite a taxa de Juros: <br />
          <input type="number" value={juros}
          onChange={(e) => setJuros(e.target.value)} />
        </p>

        <p>
          Digite o tempo (em dias) de Atraso: <br />
          <input type="number" value={dias}
          onChange={(e) => setDias(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 3" onClick={calcular} />
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Valor da Prestação: {prestacao} <br />
             Taxa de Juros: {juros} <br />
             Tempo de Atraso: {dias} <br />
             {parcela}
        </p>
  
        <p>
          <a href="/"> Voltar </a>
        </p>
  
        </form>
          
  
        </div>


      </div>
  );
}