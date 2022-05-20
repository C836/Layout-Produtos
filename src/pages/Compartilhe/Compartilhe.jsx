import Divisor from "../../components/Divisor/Divisor";
import Button from "../../components/Button/Button";

import styles from "./Compartilhe.module.css";

export default function Compartilhe() {
  return (
    <div className={styles.Compartilhe}>
      <Divisor texto="Compartilhe a novidade" />

      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>

      <form>
        <fieldset>
          <div>
            <label HTMLfor="nomeAmigo">Nome do seu amigo</label>
            <input name="nomeAmigo" />
          </div>
          
          <div>
            <label HTMLfor="emailAmigo">E-mail</label>
            <input name="emailAmigo" />
          </div>
        </fieldset>

        <Button texto={"Enviar agora"} />
      </form>
    </div>
  );
}
