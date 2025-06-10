export default function Exercicio6({quantidade, preco})
{
    let subtotal = (quantidade * preco);
    let desconto = subtotal * 0.10;
    let valorf = subtotal - desconto;

    return(
    <div>
         Quantidade: {quantidade} <br/>  
         Preço R$: {preco} <br/>
         Subtotal: {subtotal} <br/>
         Desconto R$: {desconto} <br/>
         Valor final a Pagar R$: {valorf} <br/>
 
    </div>

    );
}