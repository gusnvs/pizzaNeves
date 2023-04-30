import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

// Estou sobreescrevendo o InputHTMLAttributes, que é a tipagem do input, e dentro do <> (um generic) eu estou apenas dizendo que é do tipo HTMLInputElement
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{} 
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{} 

export function Input({...rest}: InputProps) { // esse {...rest} InputProps - eu estou dizendo que eu posso receber todos os elementos e propriedades de um input, tornando ele bem genérico para modificação
    return(
        <input className={styles.input} {...rest}/>
    )
}

export function TextArea({...rest}: TextAreaProps) {
    return(
        <textarea className={styles.input} {...rest}></textarea>
    )
}