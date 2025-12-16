import "/src/CSS/pagecontato.css";

function Contato() {
  return (
    // section principal da página de contato
    <section id="contato" className="contatocontainer">

      {/* titulo da seção */}
      <h2 className="contatotitulo">Fale Conosco</h2>

      {/* formulario de contato */}
      <form className="contatoform">

        {/* campo para nome */}
        <input
          type="text"
          placeholder="Seu Nome"
          className="contatoinput"
        />

        {/* campo para email */}
        <input
          type="email"
          placeholder="Seu E-mail"
          className="contatoinput"
        />

        {/* botao de envio */}
        <button type="submit" className="contatobotao">
          Enviar Mensagem
        </button>

      </form>
    </section>
  );
}

export default Contato;
