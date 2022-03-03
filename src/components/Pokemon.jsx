import { React, useEffect, useState } from 'react'
import axios from 'axios'


const Pokemon = ({ item }) => {

    const [imagen, setImagen] = useState([]);
    const url = item.url

    useEffect(() => {
        const fetchItem = async () => {
            const arreglo = await axios(url)
            setImagen(arreglo.data.sprites.front_shiny)
        }
        fetchItem()
    }, [])

    return (
        <div className='card'>
            <div>
                <img src={imagen} />
                <h1>{item.name}</h1>
            </div>
        </div>
    )
}

export default Pokemon