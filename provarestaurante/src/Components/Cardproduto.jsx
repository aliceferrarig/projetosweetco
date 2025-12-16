import "../CSS/cardproduto.css";

function Cardproduto() {
  return (
    <div className="cardproduct">
      <img src="/img/cupcake.png" alt="" className="cardimage" />
      {/* título */}
      <h3 className="cardtitle">Qualidade e Sabor</h3>
      {/* descrição */}
      <p className="carddescription">
        Trabalhamos apenas com produtos de qualidade, frescos e selecionados.
      </p>
    </div>
  );
}

export default Cardproduto;
