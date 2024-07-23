'use client'
import React from 'react'
import styles from '@/componentes/contactos/formulario.module.css'
import { useState } from 'react'


const Form  = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch(form.action,{
      method: 'POST',
      body: data,
      headers: {
        Accept: 'Aplication/json'
      }
    })
    const result: ErrorResponse = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map((error) => error.message).join(', '));
      return false;
  }
  setMessage('Se ha enviado el correo satisfactoriamente')
  }



  return (
    <div className={styles.contenedor}>
      <div className={styles.correo}>
        <h1>Enviáme un correo!</h1>
        <h2>Carga tus datos y enviáme un correo por cualquier duda sobre planes o servicios</h2>
      </div>
      <form action="https://formspree.io/f/xanwnwrv"
  method="POST" className={styles.form} onSubmit={handleSubmit}>
        <input name='name' type='text' placeholder='Escribe tu nombre'></input>
        <input name='email' type='email' placeholder='Escribe tu email'></input>
        <textarea name='content' placeholder='Escribe tu mensaje acá'></textarea>
        <button>Enviar</button>
        <p className={styles.alert}>{message}</p>
      </form>
    </div>
  )
}


export default Form
