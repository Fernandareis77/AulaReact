import Exercicio8 from "./exercicio8"
import Exercicio9 from "./exercicio9"

export default function App( )
{

  return (
     <div>
     <h1> Exercícios de Componentes</h1>

     
     <hr/>
     <h3> Exercício 8 </h3>
     <Exercicio8  peso={65} altura={1.75}/>
     
     <hr/>
     <h3> Exercício 9 </h3>
     <Exercicio9  capital={2000} juros={2} tempo={4}/>
     
    
     </div>
  )

}