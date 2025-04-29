export default function Exercicio5({quantidade})
{
    let bruto = (quantidade * 150);
    let inss = bruto * 0.08;
    let liquido = bruto - inss;

    return(
    <div>
         
         Quantidade de Consultas: {quantidade} <br/>
         Sálario Bruto: R${bruto} <br/>
         Desconto INSS: R${inss} <br/>
         Salário líquido: R${liquido} 
    </div>

    );
}