import { useState } from "react"
import "./Contador.css"

const Contador = () =>{
    const [count, setCount] = useState (0);
    const incrementar = () => {
        setCount(count+ 1)
    }  

    return(
        <div>
            <h3>
                <button>
                    
                </button>
            </h3>
        </div>
    )
}