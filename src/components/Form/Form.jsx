import styles from "./Form.module.css";
import Button from "../Button/Button";
import Enviado from "../Enviado/Enviado"
import { useState } from "react";

export default function Form() {
  const [enviado, ativar] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    ativar(true)
    setTimeout(()=>{
      ativar(false)
    },2500)
  }

  const handleInputCpf = (e) =>{
    if(!e.key.match(/^[0-9]*$/)){
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <Enviado ativo={enviado} />
      <label htmlFor="nome">Seu nome</label>
      <input required type={"text"} name="nome" minLength={8} />

      <label htmlFor="email">E-mail</label>
      <input required type={"email"} name="email" />

      <label htmlFor="cpf">CPF</label>
      <input required onKeyDown={handleInputCpf} type={"text"} minLength={11} maxLength={11} name="cpf" />

      <fieldset>
        <input required id="masculino" type={"radio"} name="sexo" value={"masculino"} />
        <label htmlFor="masculino">Masculino</label>

        <input required id="feminino" type={"radio"} name="sexo" value={"feminino"} />
        <label htmlFor="feminino">Feminino</label>
      </fieldset>

      <Button texto={"Enviar"} />
    </form>
  );
}
