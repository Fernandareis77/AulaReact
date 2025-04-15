export default function Exercicio1({fah})

{
     let celsius = (Number = (fah) - 32)*5/9

    return(
        <div>
            <h3> Exercício 1 </h3>

             A conversão de 100F para Celsius é {celsius}
             A conversão de 70F para Celsius é {celsius}
        </div>
    );
}