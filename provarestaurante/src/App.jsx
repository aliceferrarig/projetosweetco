import "../src/CSS/global.css"
import Header from './Components/Header.jsx'
import Hero from "./Components/Hero.jsx"
import Pqescolher from './Components/Pqescolher.jsx'
import Cardapio from "./Components/cardapio.jsx"
import HistoriaMissao from "./Components/Historiamissao.jsx"
import Ondeestamos from "./Components/Ondeestamos.jsx"
import Mapa from "./Components/Mapa.jsx"
import Pagecontato from "./Components/Pagecontato.jsx"
import Footer from "./Components/Footer.jsx"



function App() {
  return (
    <div>
    <div>
      <Header /> 
    </div>
    <Hero /> 
    <Pqescolher />
    <Cardapio />
    <HistoriaMissao />
    <Ondeestamos />
    <Mapa />
    <Pagecontato />
    <div>
      <Footer /> 
    </div>
</div>
  )
}

export default App
