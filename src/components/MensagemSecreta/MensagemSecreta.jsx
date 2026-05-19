import "./MensagemSecreta.css";

const MensagemSecreta = ({ mensagem }) => {
    return(
        <>
        <h1>{mensagem ? mensagem : "Nenhuma mensagem secreta disponível"}</h1>
        </>
    )
}

export default MensagemSecreta