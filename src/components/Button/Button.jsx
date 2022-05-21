import "./Button.css";

export default function Button(props) {
  return <button type={props.type} onClick={props.funcao} name={props.name} className={`Button ${props.cor}`}>{props.texto}</button>;
}
