import "/src/CSS/mapa.css";

function Mapa() {
  return (
    // seção de localização
    <section id="mapa" className="mapabox">
      
      {/* título da seção */}
      <h3 className="mapatitulo">Como chegar</h3>

      {/* mapa incorporado do Google Maps */}
      <iframe
        className="mapaiframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.9181622889968!2d-42.362332032968055!3d-21.129841503389283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc79a387e9b41%3A0x608a37d7a38aa376!2sSENAI%20MURIA%C3%89!5e0!3m2!1spt-BR!2sbr!4v1765913555595!5m2!1spt-BR!2sbr"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* botão para abrir no Google Maps */}
      <a
        className="mapabutton"
        href="https://maps.google.com/?q=SENAI+MURIAÉ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no Google Maps
      </a>
    </section>
  );
}

export default Mapa;
