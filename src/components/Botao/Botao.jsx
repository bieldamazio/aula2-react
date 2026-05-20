import './Botao.css';

function Botao({ texto, acao, classe }) {
  return (
    <button className={classe} onClick={acao}>
      {texto}
    </button>
  )
};

export default Botao;