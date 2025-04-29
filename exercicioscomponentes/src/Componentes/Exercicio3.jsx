export default function Exercicio3({valor, taxa, tempo})
{
    let parcela = valor + ((valor * ((taxa*taxa)/100)) * tempo)

    return(
    <div>
         Valor: R${valor} <br/>
         Taxa: {taxa}% <br/>
         Tempo: {tempo} dias <br/>
         Valor da Parcela em Atraso é {parcela} 
    </div>

    );
}