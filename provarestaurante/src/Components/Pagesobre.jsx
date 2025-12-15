import "/src/CSS/pagesobre.css"

function Pagesobre() {
  return (
    <section id="sobre" className="sectioncardcontainer">
      <h2 className="sectiontitlecenter">Nossa equipe</h2>
      <p className="aboutparagraph">
        Somos uma equipe dedicada a oferecer os melhores produtos e serviços aos
        nossos clientes. Nossa missão é garantir a satisfação e confiança de
        todos que escolhem nossa loja virtual.
      </p>
      <ul className="aboutlist">
        <li>Alice - Fundadora e CEO</li>
        <li>Bruno - Gerente de Marketing</li>
        <li>Carla - Desenvolvedora Web</li>
        <li>Daniel - Atendimento ao Cliente</li>
      </ul>
    </section>
  );
}

export default Pagesobre;
