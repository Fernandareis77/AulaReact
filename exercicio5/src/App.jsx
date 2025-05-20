import Exercicio6 from "./Exercicio6"
import Exercicio7 from "./Exercicio7"

export default function App( )
{

  return (
     <div>
     <h1> Exercícios de Componentes</h1>

     
     <hr/>
     <h3> Exercício 6 </h3>
     <Exercicio6  quantidade={10} preco={200}/>
     
     
     <hr/>
     <h3> Exercício 7 </h3>
     <Exercicio7  n1={5} n2={9} n3={10}/>
     <Exercicio7  n1={2} n2={2} n3={2}/>
     


     </div>
  )

}