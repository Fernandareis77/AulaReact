export default function Exercicio2({peso, altura})
{
     let imc = (peso)/(altura * altura)

    return(
    <div>
        <p> Uma pessoa com {peso}Kg e {altura} metros tem IMC de {imc} </p>
    </div>

    );
}