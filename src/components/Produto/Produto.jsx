import Button from "../Button/Button";

import styles from "./Produto.module.css"

export default function Produto(props){


    return(
        <div className={styles.Produto}>
            <figure>
                <img src={props.imagem}/>
            </figure>

            <ul>
                <li>
                    <h2>
                        {props.name}
                    </h2>
                </li>
                <li>
                    De: R${props.preco[0]}
                </li>
                <li>
                    <h1>
                        Por: R${props.preco[1]}
                    </h1>
                </li>
                <li>
                    ou {props.preco[2]}x de R${props.preco[3]}
                </li>
                <li>
                    <Button texto="Comprar"/>
                </li>
            </ul>
        </div>
    )
}