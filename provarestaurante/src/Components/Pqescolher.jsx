import CardProduto from "./Cardproduto";
import "/src/CSS/pqescolher.css"
function Pqescolher() {
  return (
    <div id="produtos" className="pagecontainer">
      <h2 className="titlepqescolher">Por que escolher a Sweet Co.?</h2>
      <div className="cardlistcontainer">
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  );
}

export default Pqescolher;
