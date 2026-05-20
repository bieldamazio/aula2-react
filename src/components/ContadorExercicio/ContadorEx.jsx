import { useState } from "react"
import "./ContadorEx.css"
import Botao from "../Botao/Botao.jsx";

const ContadorEx = () =>{
    const [count, setCount] = useState(0);

    const incrementar = () =>{
        setCount(count + 1);
    }

    const decrementar = () =>{
        setCount(count - 1);
    }

    const resetar = () =>{
        setCount(0);
    }

    let cor;

    if (count < 0) {
        cor = "red";
    } 
    else if (count > 0) {
        cor = "green";[]
    }
    else {
        cor = "black";
    }

    return(
        <div>
            <div className="contador-div">
                <Botao texto="-" acao={decrementar} classe="botao-dec"/>
                <h3 className="titulo-menor">Contador: <span style={{ color: cor }}>{count}</span></h3>
                <Botao texto="+" acao={incrementar} classe="botao-inc"/>
                <Botao texto="Resetar" acao={resetar} classe="botao-res"/>
            </div>
        </div>
    )
}

export default ContadorEx