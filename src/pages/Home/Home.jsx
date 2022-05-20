import { useState, useEffect} from "react";

import styles from "./Home.module.css";
import up_arrow from './../../assets/images/up-arrow.svg'

import Button from "../../components/Button/Button";
import AjudaForm from "../../components/AjudaForm/AjudaForm";

export default function Home() {
const [details, setDetails] = useState([true, true])
const handleDetailsClick = (e) => {
    e.preventDefault()
    if(details[0]===true){
        setDetails([false, details[1]])
        setTimeout(()=>{
            setDetails([false, false])
        },400)
    }
    else{
        setDetails([true, true])
    } 
}

  return (
    <div className={styles}>
      <header>
        <span className={styles.Background} />
        <article>
          <h2>Uma seleção de produtos</h2>
          <h1>Especial para você</h1>
          <p>
            Todos os produtos desta lista foram selecionados a partir da sua
            navegação. Aproveite!
          </p>
        </article>
        <nav>
          <Button texto={"Conheça a Linx"} />
          <Button texto={"Ajude o algorítimo"} />
          <Button texto={"Seus produtos"} />
          <Button texto={"Compartilhe"} />
        </nav>
      </header>

        <section className={styles.expanse}>
            <summary onClick={handleDetailsClick}>
                <h2>
                    Ajude o algorítimo a ser mais certeiro <img style={{transform: details[0] === true ? "rotate(-90deg)" : ''}} src={up_arrow}/>
                </h2>
            </summary>
            <section 
            className={details[0] ? styles.open : styles.close}
            style={{position: details[1] ? "static" : "absolute"}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
                    rhoncus erat sed interdum dignissim. Suspendisse semper pretium
                    consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
                    quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
                    euismod augue vel egestas. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
                    urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu
                    condimentum urna. Curabitur eu magna eget turpis condimentum ultrices.
                    Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat.
                    Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis,
                    consequat velit ut, ultrices orci. Nulla varius elementum erat vel
                    pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus
                    commodo, odio ante suscipit libero, at mattis augue est vel metus.
                </p>
                <AjudaForm />
            </section>
        </section>
    </div>
  );
}
