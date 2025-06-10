import Exercicio10 from "./exercicio10"

export default function App( )
{

  return (
     <div>
     <h1>Exercícios de Componentes</h1>
     
     <hr/>
     <h3> Exercício 10 </h3>
     <Exercicio10  distancia={1000} velocidade={10} /> <br/>
     <Exercicio10  distancia={1000} velocidade={100} /> <br/>

     </div>
  )

}