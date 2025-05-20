export default function Exercicio7({n1,n2,n3})
{
    let media = (Number(n1) + Number(n2) + Number(n3)) /3;

    return(
    <div>
         A  Média dos Números {n1}, {n2}, {n3} é: {media}
    </div>

    );
}