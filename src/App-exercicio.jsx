import BoasVindas from "./components/BoasVindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";

function App() {
  return (
    <div>
      <BoasVindas name="Gabriel"/>
      <MensagemSecreta mensagem="123"/>

      <CartaoProduto
        nome="Notebook"
        preco="R$ 13131"
        imagem="../public/notebook.png"
      />

      <CartaoProduto
        nome="Mouse"
        preco="R$ 133"
        imagem="../public/mouse.png"
      />

      <CartaoProduto
        nome="Fone de Ouvido"
        preco="R$ 133"
        imagem="../public/fone.png"
      />
    </div>
  );
}

export default App;