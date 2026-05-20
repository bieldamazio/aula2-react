import "./MensagemSecreta.css";

const MensagemSecreta = ({ mensagem }) => {
    return(
        <>
        <h1 className="mensagem-secreta">{mensagem ? mensagem : "Nenhuma mensagem secreta disponível"}</h1>
        </>
    )
}

export default MensagemSecreta