import styles from './AjudaForm.module.css'
import Button from '../Button/Button'

export default function AjudaForm(){
    return(
        <form>
            <label for="nome">
                Seu nome
            </label>
            <input name="nome"/>
            
            <label for="email">
                E-mail
            </label>
            <input name="email"/>

            <label for="cpf">
                CPF
            </label>
            <input name="cpf"/>

            <fieldset>
                <input id="masculino" type={"radio"} name="sexo" value={"masculino"}/>
                <label for="masculino">
                    Masculino 
                </label>
                
                <input id="feminino" type={"radio"} name="sexo" value={"feminino"}/>
                <label for="feminino">
                    Feminino 
                </label>
            </fieldset> 


            <Button texto={"Enviar"} />
        </form>
    )
}