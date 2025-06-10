export default function Exercicio11({custo})
{
    let distribuidor = Number(custo) * 0.28 ;
    let impostos = Number(custo) * 0.45 ;
    let valorf = Number(custo) + Number(impostos) + Number(distribuidor) ;

    return(
    <div>
        Valor do Distribuidor: {distribuidor} <br/>
        Valor dos Impostos: {impostos} <br/>
        Custo Final: {valorf}  <br/>
    </div>

    );
}