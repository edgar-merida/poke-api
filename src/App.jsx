import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Header } from './components/Header'
import { Pokemones } from './components/Pokemones'
import { Form } from './components/Form'
//import 'bootstrap/dist/css/bootstrap.css'
import Buscado from './components/Buscado'


function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchitems = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon/?limit=352')
      setIsLoading(false)
      setItems(result.data.results)
    }

    fetchitems()

  }, [items])


  return (
    <div className="App">
      <Header />
      <Form getQuery={(e) => setQuery(e)} />
      {query === '' ?
        (<Pokemones isLoading={isLoading} items={items} />) :
        (<Buscado item={query} />)}
    </div>
  )
}

export default App
