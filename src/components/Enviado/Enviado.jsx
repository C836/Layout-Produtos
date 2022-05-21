import styles from "./Enviado.module.css"
import ok_sign from "./../../assets/images/ok-sign.svg"

export default function Enviado(props){
    return(
        <div className={`${styles.Enviado} ${props.ativo===true?styles.Ativo:''}`} >
            <img src={ok_sign} />
        </div>
    )
}