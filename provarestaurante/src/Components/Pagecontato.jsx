import "/src/CSS/pagecontato.css"
function Pagecontato() {
  return (
    <section id="contato" className="sectioncardcontainer">
      <h2 className="sectiontitlecenter">Envie uma mensagem</h2>
      <form className="contactform">
        <input type="text" placeholder="Nome" className="contactinput" />
        <input type="email" placeholder="Email" className="contactinput" />
        <textarea placeholder="Mensagem" className="contact-text-area" />
        <button type="submit" className="contactbutton">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Pagecontato;
