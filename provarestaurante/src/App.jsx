import "../src/CSS/global.css"
import Header from './Components/Header.jsx'
import Hero from "./Components/Hero.jsx"
import Pqescolher from './Components/Pqescolher.jsx'
import Pagesobre from './Components/Pagesobre.jsx'
import Pagecontato from './Components/Pagecontato.jsx'
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <div>
    <div>
      <Header /> 
    </div>
    <Hero /> 
    <Pqescolher />
    <Pagesobre />
    <Pagecontato />
    <div>
      <Footer /> 
    </div>
</div>
  )
}

export default App
