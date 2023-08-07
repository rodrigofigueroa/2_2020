//Import
import React      from 'react'
import { Result } from './components/Result'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )
  return (
    <main className='container'>
      <Result value={ 0 } text="Texto" prop3={ false } />
    </main>
  )
}

// exportación

export { App }
