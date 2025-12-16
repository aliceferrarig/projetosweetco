import "/src/CSS/historiamissao.css";

export default function HistoriaMissao() {
  return (
    <section id="historia" className="historiacontainer">
      <h2 className="titlehistoria">Nossa História e Missão</h2>
{/* história */}
      <p>
        A Confeitaria Doce Encanto nasceu do amor pela confeitaria artesanal e
        do desejo de transformar pequenos momentos em grandes lembranças. O que
        começou na cozinha de casa, com receitas de família e muito carinho,
        hoje se traduz em doces feitos à mão, com atenção a cada detalhe e
        ingredientes selecionados.
      </p>
      {/* missão */}
      <p>
        Nossa missão é levar sabor, afeto e alegria para o seu dia. Acreditamos
        que um bom doce vai além do paladar — ele desperta emoções, aproxima
        pessoas e torna qualquer ocasião mais especial. Por isso, cada bolo,
        torta e sobremesa é preparado com dedicação, criatividade e um toque
        caseiro que faz toda a diferença..
      </p>
{/* valores */}
      <div className="valores">
        <span>
          <strong>🎂 Receitas Artesanais</strong>
        </span>
        <span>
          <strong>🍫 Ingredientes de Qualidade</strong>
        </span>
        <span>
          <strong>🤍 Feito com Amor</strong>
        </span>
      </div>
    </section>
  );
}
