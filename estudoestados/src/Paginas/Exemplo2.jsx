export default function Exemplo2() {
  return (
    <div>
      <h1> Exemplo 2 </h1>

      <div className="conteudo">

        <h3> Calculo da Média </h3>

        <p>
          O Objetivo será receber duas notas, calcular a média e 
          exibir o resultado na tela.
        </p>

        <form>
          
          <p>
            Digite o primera nota<br />
            <input type="text" />
          </p>

          <p>
            Digite o segunda nota <br />
            <input type="text" />
          </p>

          <p>
            <input type="button" value="Calcular Média" />
          </p>

          <p>
          <a href="/"> Voltar </a>
          </p>

        </form>
        

      </div>

      
    </div>
  );
}
