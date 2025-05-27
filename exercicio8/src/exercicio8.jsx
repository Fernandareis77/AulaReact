export default function Exercicio8({peso,altura})
{
    let imc = Number(peso) / ( Number(altura) * Number(altura) );

    return(
    <div>
         Peso: {peso} <br/>
         Altura: {altura} <br/>
         Seu IMC é {imc.toFixed(2)} 
    </div>

    );
}