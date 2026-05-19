import Titulo from "./components/Titulo/Titulo";
import TituloProps from "./components/TituloProps/TituloProps";
import "./App.css";
import TituloUseState from "./components/TituloUseState/TituloUseState";

const App = () => {
  return(
    <>
      <Titulo />

      <hr />

      <TituloProps 
        descricao="FrontEnd"
        cor="blue"
        qtd_alunos={20}
      />

      <hr />

      <TituloProps 
        cor="red"
        qtd_alunos={30}
        paragrafo={true}
      />

      <hr />

      <TituloUseState
      cor = "orange"
      />

    </>
  )
}

export default App;