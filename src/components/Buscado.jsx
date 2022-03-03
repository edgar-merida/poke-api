import { React, useEffect, useState } from 'react'
import axios from 'axios'

const Buscado = ({item}) => {
    const [imagen, setImagen] = useState([]);
    const [name, setName] = useState();
    const url = ('https://pokeapi.co/api/v2/pokemon/'+ item)

    useEffect(() => {
        const fetchItem = async () => {
            const arreglo = await axios(url)
            setImagen(arreglo.data.sprites.front_shiny)
            setName(arreglo.data.name)
        }
        fetchItem()
    }, [])

    return (
        <div className='card'>
            <div>
                <img src={imagen} />
                <h1>{name}</h1>
            </div>
        </div>
    )
}


export default Buscado