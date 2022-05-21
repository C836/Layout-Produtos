import Divisor from "../../components/Divisor/Divisor";
import Button from "../../components/Button/Button";
import Enviado from "../../components/Enviado/Enviado";

import styles from "./Compartilhe.module.css";

import { useRef, useState } from "react";

export default function Compartilhe(props) {
  const [enviado, ativar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    ativar(true)
    setTimeout(()=>{
      ativar(false)
    },2500)
  }

  return (
    <div ref={props.refs} className={styles.Compartilhe}>
      <Enviado ativo={enviado} />
      <Divisor texto="Compartilhe a novidade" />

      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label HTMLfor="nomeAmigo">Nome do seu amigo</label>
            <input required type={"text"} name="nomeAmigo" />
          </div>

          <div>
            <label HTMLfor="emailAmigo">E-mail</label>
            <input required type={"email"} name="emailAmigo" />
          </div>
        </fieldset>

        <Button texto={"Enviar agora"} />
      </form>
    </div>
  );
}
