import "./App.css"

import BoasVindas from "./components/BoasVindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";

function App() {
  return (
    <div className="app">
      <BoasVindas name="Gabriel"/>
      
      <MensagemSecreta mensagem="123"/>

      <div className="div-produtos">

        <CartaoProduto
          nome="Notebook"
          preco="R$ 13131"
          imagem="/notebook.png"
        />

        <CartaoProduto
          nome="Mouse"
          preco="R$ 133"
          imagem="/mouse.png"
        />

        <CartaoProduto
          nome="Fone de Ouvido"
          preco="R$ 133"
          imagem="/fone.png"
        />

      </div>
    </div>
  );
}

export default App;