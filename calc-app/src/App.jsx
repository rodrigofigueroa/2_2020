//Import
import React      from 'react'
import { Result } from './components/Result'
import { Button } from './components/Button'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )

  const onHandlerClickfunction = text => {
    console.log( 'Text click', text )
  }
  
  return (
    <main className='container'>
      <Result/>
      <Button type={ '_1' } text={ '1' } handlerClick={ onHandlerClickfunction } />
    </main>
  )
}

// exportación

export { App }
