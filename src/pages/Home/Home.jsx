import { useState, useEffect, useRef } from "react";

import useWindowDimensions from "./../../utils/useWindowDimensions";

import styles from "./Home.module.css";
import up_arrow from "./../../assets/images/up-arrow.svg";

import Enviado from "../../components/Enviado/Enviado";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

export default function Home(props) {
  const ajudeRef = useRef(null)
  const { height, width } = useWindowDimensions();
  const [details, setDetails] = useState([true, true]);

  const executeScroll = (e) => {
    switch(e.target.name){
      case 'ajude':
        ajudeRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'produtos':
        props.produtos.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'compartilhe': 
        props.compartilhe.current.scrollIntoView({ behavior: 'smooth' })
        break
    }
  };

  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (details[0] === true) {
      setDetails([false, details[1]]);
      setTimeout(() => {
        setDetails([false, false]);
      }, 400);
    } else {
      setDetails([true, true]);
    }
  };

  useEffect(() => {
    if (width > 850) setDetails([true, true]);
  }, [width]);

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
          {[
            { valor: null, texto: "Conheça a Linx" },
            { valor: "ajude", texto: "Ajude o algorítimo" },
            { valor: "produtos", texto: "Seus produtos" },
            { valor: "compartilhe", texto: "Compartilhe" },
          ].map((item, index)=>(
            <Button funcao={executeScroll} cor="clara" name={item.valor} texto={item.texto} />
          ))}
        </nav>
      </header>

      <section ref={ajudeRef} className={styles.expanse}>
        <summary onClick={width < 850 ? handleDetailsClick : null}>
          <h2>
            Ajude o algorítimo a ser mais certeiro{" "}
            <img
              style={{ transform: details[0] === true ? "rotate(-90deg)" : "" }}
              src={up_arrow}
            />
          </h2>
        </summary>
        <section
          className={details[0] ? styles.open : styles.close}
          style={{ position: details[1] ? "static" : "absolute" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu
            urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper
            pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis
            ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean
            lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum vel urna tortor. Vivamus et arcu non felis tristique
            eleifend.
            <br />
            <br />
            Morbi eu condimentum urna. Curabitur eu magna eget turpis
            condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
            purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
            Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
            varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi
            viverra, magna ac luctus commodo, odio ante suscipit libero, at
            mattis augue est vel metus.
          </p>
          {width < 700 ? <Form /> : ""}
        </section>
      </section>
      {width > 700 ? <Form /> : ""}
    </div>
  );
}
