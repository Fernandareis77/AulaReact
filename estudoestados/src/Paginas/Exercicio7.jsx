import { useState } from "react";

export default function Exercicio7() {

  const[n1, setN1] = useState(); 
  const[n2, setN2] = useState();
  const[n3, setN3] = useState();
  const[media, setMedia] = useState();
  
  function calcular()
  {

    let media;

    media= (Number(n1) + Number(n2) + Number(n3))/3 ;
    setMedia("Média: " + media );

  }

    return (
      <div>
        
        <h1> Exercício 7 </h1>
  
      <div className="conteudo">
  
        <form>
            
        <p>
          Digite a Nota 1: <br />
          <input type="text" value={n1}
          onChange={(e) => setN1(e.target.value)} />
        </p>

        <p>
          Digite a Nota 2: <br />
          <input type="text" value={n2}
          onChange={(e) => setN2(e.target.value)} />
        </p>

        <p>
          Digite a Nota 3: <br />
          <input type="text" value={n3}
          onChange={(e) => setN3(e.target.value)} />
        </p>
  
        <p>
          <input type="button" value="Exercício 7" onClick={calcular}/>
        </p>

        <p>
             <b> Resultado </b>
             <br />
             Nota 1: {n1} <br />
             Nota 2: {n2} <br />
             Nota 3: {n3} <br />
             {media}
        </p>
  
        <p>
          <a href="/"> Voltar </a>
        </p>
  
        </form>
          
  
        </div>


      </div>
  );
}