import  { useState } from "react";
import "./TituloUseState.css";

const TituloUseState = ({cor}) => {

    const [texto, setTexto] = useState("Titulo Inicial");
    const [inputTexto, setInputTexto] = useState("");

    // const mudarTexto = () => {
    //     setTexto("Titulo Alterado pelo botao");
    //     cor = "green";
    // }

    const mudarTexto= () => {
        setTexto(inputTexto);
    }

  return (

    <div>
        <h2 style={{color: cor}}>{texto}</h2>

        <input 
        className="input-texto"
        type="text"
        value= {inputTexto}
        onChange={(e)=> {setInputTexto(e.target.value)}} />

        <button 
        className="btn-mudar"
        onClick={() => mudarTexto()}
        > Mudar</button>

          {/* <button onClick={()=> mudarTexto()} className="btn-mudar">Mudar</button> */}
    </div>
  
  )


}

export default TituloUseState