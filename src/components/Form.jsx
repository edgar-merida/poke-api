import { React, useEffect, useState } from 'react'


export const Form = ({ getQuery }) => {

  const [name, setName] = useState('');


  const onClick = (e) => {
    e.preventDefault()
    console.log('You clicked ' + name)
    
    getQuery(name)
  }

  const ingresoDatos = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setName(e.target.value)
  }


  return (

    <section className='search'>
      <form onSubmit={(e) => onClick(e)}>
        <input className="formulario"
          type="text"
          className='form-control'
          placeholder='Buscar'
          name='name'
          onInput={ingresoDatos}
          //defaultValue={name}
          //onChange={(e) => onChange(e.target.value)}
          autoFocus />
        <button type='submit'>Buscar</button>
      </form>
    </section>

  )
}


