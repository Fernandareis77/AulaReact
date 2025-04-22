export default function Exemplo1({numero1, numero2})
{
    let soma = Number(numero1) + Number(numero2);

    return(
        <div>
             <p> A soma dos números é {soma} </p>
        </div>
    );

}