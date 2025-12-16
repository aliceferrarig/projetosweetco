import "/src/CSS/cardapio.css";

function Cardapio() {
  return (
    <section id="cardapio" className="sectioncontainer">
      <h2 className="titlecardapio">Nossos Doces da Semana</h2>
      {/* primeira dupla */}
      <div className="boxrosa">
        <div className="cardapiolista">
          <div className="cardcardapio">
            <img
              src="/img/bolocerejachoco.jpeg"
              alt=""
              className="cardimagecardapio"
            />

            <h3 className="cardtitle">Bolo de Chocolate com Cerejas</h3>
            <p className="descriptioncardapio">Chocolate de Qualidade | Fatias: 20</p>
            <span className="cardprice">R$ 190,90</span>
            <button className="buttoncardapio">Adicionar</button>
          </div>

          <div className="cardcardapio">
             <img
              src="/img/croassaint.jpg"
              alt=""
              className="cardimagecardapio"
            />
            <h3 className="cardtitle">Croissant Recheado de Sabores Diversos</h3>
            <p className="descriptioncardapio">Escolha o sabor | Unidades: 01</p>
            <span className="cardprice">R$ 26,90</span>
            <button className="buttoncardapio">Adicionar</button>
          </div>
        </div>
      </div>

      {/* segunda dupla */}
      <div className="boxrosa">
        <div className="cardapiolista">
          <div className="cardcardapio">
             <img
              src="/img/cookies.jpg"
              alt=""
              className="cardimagecardapio"
            />
            <h3 className="cardtitle">Cookies Recheados Gourmet</h3>
            <p className="descriptioncardapio">Escolha o sabor | Unidades: 01</p>
            <span className="cardprice">R$ 24,90</span>
            <button className="buttoncardapio">Adicionar</button>
          </div>

          <div className="cardcardapio">
             <img
              src="/img/cinnamon.jpg"
              alt=""
              className="cardimagecardapio"
            />
            <h3 className="cardtitle">Cinnamon Rolls com Cobertura</h3>
            <p className="descriptioncardapio">Escolha o sabor | Unidades: 01</p>
            <span className="cardprice">R$ 29,90</span>
            <button className="buttoncardapio">Adicionar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardapio;
