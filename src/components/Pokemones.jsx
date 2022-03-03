import React from 'react'
import Searching from '../components/Searching'
import Pokemon from './Pokemon'

export const Pokemones = ({ isLoading, items}) => {
  return (
    isLoading ? (<Searching />) : 
        (<section className='cards'>
        {items.map((item, index)=> (
        <Pokemon key={index} item={item} />
        )
        )}
    </section>)

  )
}
