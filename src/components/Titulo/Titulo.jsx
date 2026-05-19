import "./Titulo.css";

const Titulo = () => {
    let nome = "Gabriel";

    return(
        <div className="container">

            <h1 className="titulo-principal">
                Aula 2 - Trabalhando com useState 
            </h1>

            <h2 className="subtitulo">
                Olá, eu sou {nome}, e hoje vamos aprender um pouco sobre o Hook useState.
            </h2>

            <p className="paragrafo">
                O useState é um Hook fundamental do react que permite criar variáveis de estado em componentes funcionais
            </p>

            <p className="paragrafo">
                Ele retorna um array com variável de estado (valor atual) e uma função para atualiza-la;
            </p>

            <img 
                src="react-hook.webp" 
                alt="img da logo react e hook" 
                className="imagem-titulo" 
            />

        </div>
    )
}

export default Titulo;