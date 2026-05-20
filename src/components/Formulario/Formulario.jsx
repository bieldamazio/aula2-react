import { useState } from "react";
import "./Formulario.css";
import Botao from "../Botao/Botao";

const Formulario = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const enviarFormulario = () => {
        alert(
            "Nome: " + nome +
            "\nEmail: " + email +
            "\nTelefone: " + telefone
        );
    }

  return (

    <div>
        <div className="div-principal">
            <h2>Formulário de Cadastro: <span className="span-form"> <br /> Cadastre-se para solicitar informações ou orçamento para a construção de uma nova casa!</span></h2>
            <div className="div-form">
                <input
                    className="input-form"
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => {setNome(e.target.value)}}
                />
                <input
                    className="input-form"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <input
                    className="input-form"
                    type="text"
                    placeholder="Digite seu telefone"
                    value={telefone}
                    onChange={(e) => {setTelefone(e.target.value)}}
                />
                <Botao texto="Enviar" acao={enviarFormulario} classe="btn-enviar"/>
            </div>
        </div>
    </div>

  )

}

export default Formulario;