import { useState } from "react";

export default function Exercicio6() {

  const[quantidade, setQuantidade] = useState(); 
  const[preco, setPreco] = useState();
  const[resultado, setResultado] = useState();
  
  function calcular()
  {

    let subtotal, desconto, vf;

    subtotal= Number(quantidade) * Number(preco) ;
    desconto= Number(subtotal) * 0.10;
    vf= Number(subtotal) - Number(desconto) ;
    setResultado("Subtotal: " + subtotal + ", Desconto: " + desconto + ", Valor Final a Pagar: " + vf);

  }

    return (
      <div>
        
        <h1> Exercício 6 </h1>
  
      <div className="conteudo">
  
        <form>
            
        <p>
          Digite a Quantidade: <br />
          <input type="text" value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)} />
        </p>

        <p>
          Digite o Preço: <br />
          <input type="text" value={preco}
          onChange={(e) => setPreco(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 6" onClick={calcular}/>
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Quantidade: {quantidade} <br />
             Preço: {preco} <br />
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