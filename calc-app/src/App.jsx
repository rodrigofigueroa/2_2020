//Import
import React      from 'react'
import { Result } from './components/Result'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )
  return (
    <main className='container'>
      <Result/>
    </main>
  )
}

// exportación

export { App }
