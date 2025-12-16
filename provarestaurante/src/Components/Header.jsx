import "../CSS/header.css";

function Header() {
  return (
    // header principal do site
    <header id="header" className="headerstyle">
      <div className="headercontainer">
        
        {/* logo e nome da confeitaria */}
        <div className="headerlogocontainer">
          <img
            src="/img/logoconfeitaria.png"
            alt="Logo da Confeitaria Clássica"
            className="logoheader"
          />
          <span className="logotext">Confeitaria Clássica</span>
        </div>

        {/* menu de navegação (âncoras) */}
        <nav className="navmenu">
          <a href="#header" className="navlink">Início</a>
          <a href="#vantagens" className="navlink">Vantagens</a>
          <a href="#cardapio" className="navlink">Cardápio</a>
          <a href="#historia" className="navlink">Sobre Nós</a>
          <a href="#mapa" className="navlink">Localização</a>
          <a href="#contato" className="navlink">Contato</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;
