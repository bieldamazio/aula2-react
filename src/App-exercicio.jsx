import "./App.css"

import BoasVindas from "./components/BoasVindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";
import ContadorEx from "./components/ContadorExercicio/ContadorEx";
import Formulario from "./components/Formulario/Formulario";

function App() {
  return (
    <div className="app">
      <BoasVindas name="Cliente Especial"/>
      
      <MensagemSecreta mensagem="Fique a vontade para escolher sua próxima casa!"/>

      <div className="div-produtos">

        <CartaoProduto
          nome="Casa Básica"
          preco="R$ 9.999,99"
          imagem="/casa-pobre.png"
        />

        <CartaoProduto
          nome="Casa Mediana"
          preco="R$ 130.999,99"
          imagem="/casa-mediana.png"
        />

        <CartaoProduto
          nome="Mansão Luxuosa"
          preco="R$ 1.000.000.000,00"
          imagem="/mansao.png"
        />
      </div>

      <ContadorEx />

      <Formulario />
    </div>
  );
}

export default App;