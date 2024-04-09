import { Container } from "./App.styles";
import { Header } from "./components/Header";
import { Button } from "./components/ButtonPrimary";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";


export const App = () => {
  return(
    <Container>
      <Header />
      <main>
        <div className="banner">
          <h1>Emerson Alexandre</h1>
          <p>Desenvolvedor front-end altamente qualificado, com experiência em criação de interfaces de usuário atraentes e funcionais para websites e aplicativos. Proficiente em HTML, CSS e JavaScript. </p>
          <Button text="Saber mais" />
        </div>
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </Container>
  )
}

export default App
