export default function Exercicio3({valor, taxa, tempo})
{
    let parcela = valor + ((valor * ((taxa*taxa)/100)) * tempo)

    return(
    <div>
        <p> Valor: {valor}R$ </p>
        <p> Taxa: {taxa}% </p>
        <p> Tempo: {tempo} dias </p>
        <p> Valor da Parcela em Atraso é {parcela} </p>
    </div>

    );
}