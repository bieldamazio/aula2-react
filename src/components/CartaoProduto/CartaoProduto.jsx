import "./CartaoProduto.css"

function CartaoProduto({ nome, preco, imagem }) {
  return (
    <div className="cartao-produto">
      <img src={imagem} alt={nome} />

      <h2>{nome}</h2>

      <p>{preco}</p>

      <button>Comprar</button>
    </div>
  );
}

export default CartaoProduto;