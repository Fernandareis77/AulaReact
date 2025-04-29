export default function Exercicio4({tipo, base, altura})
{

    if  (tipo == "triangulo")
    {
        let area = (base * altura)/2;

        return(
            <div>
                Polígono {tipo} de Base {base} e Altura {altura} possui Área de {area}
            </div>
            
            );
    }

    else 
    if (tipo == "retangulo")
    {
        let area = (base * altura);

        return(
            <div>
                Polígono {tipo} de Base {base} e Altura {altura} possui Área de {area}
            </div>
            
            );
    }

    else
    {
        return (
            <div>
                Valor do Tipo é Inválido
            </div>
            
            );
    }
}