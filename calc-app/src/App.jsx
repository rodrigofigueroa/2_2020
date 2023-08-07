//Import
import React      from 'react'
import { Result } from './components/Result'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )
  return (
    <main className='container'>
      <Result value={ '10' } />
    </main>
  )
}

// exportación

export { App }
