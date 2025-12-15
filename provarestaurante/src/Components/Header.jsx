import "../CSS/header.css";

function Header() {
  return (
    <header className="headerstyle">
      <div className="headercontainer">
        <div className="headerlogocontainer">
          <img src="/img/logoconfeitaria.png" alt="" className="logoheader" />
          <span className="logotext">Confeitaria Clássica</span>
        </div>

        <nav className="navmenu">
          <a href="#inicio" className="navlink">
            Início
          </a>
          <a href="#vantagens" className="navlink">
            Vantagens
          </a>
          <a href="#cardapio" className="navlink">
            Cardápio
          </a>
          <a href="#sobrenos" className="navlink">
            Sobre Nós
          </a>
          <a href="#localizacao" className="navlink">
            Localização
          </a>
          <a href="#contato" className="navlink">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;