import "/src/CSS/footer.css";

export default function Footer() {
  return (
    <>
      {/* onda ou livro */}
      <div className="footerwave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="wavefill"
          />
        </svg>
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="footercontent">
          {/* links */}
          <div className="footercol">
            <h4>Links</h4>
            <a href="#header">Início</a>
            <a href="#historia">Sobre</a>
            <a href="#">Galeria</a>
            <a href="#contato">Contato</a>
          </div>

          {/* contato */}
          <div className="footercol">
            <h4>Contato</h4>
            <p>contato@sweetco.com</p>
            <p>(32) 90000-0000</p>
          </div>

          {/* redes sociais */}
          <div className="footercol">
            <h4>Redes</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        {/* copyright */}
        <div className="footercopy">
          <p>© 2025 • Seusite</p>
        </div>
      </footer>
    </>
  );
}