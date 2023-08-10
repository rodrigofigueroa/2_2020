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

  const handlerClickOperation = operation  => {
    console.log( 'Operations', operation )
  }

  return (
    <main className='container'>
      <Result/>
      <section className='calc'>
        <div>
          <div className='num'>
            <Button type={ '_1' } text={ '1' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '2' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '3' } handlerClick={ onHandlerClickfunction } />
          </div>
          <div className='num'>
            <Button type={ '_1' } text={ '4' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '5' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '6' } handlerClick={ onHandlerClickfunction } />
          </div>
          <div className='num'>
            <Button type={ '_1' } text={ '7' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '8' } handlerClick={ onHandlerClickfunction } />
            <Button type={ '_1' } text={ '9' } handlerClick={ onHandlerClickfunction } />
          </div>
          <div className='num'>
            <Button type={ '_1' } text={ '0' } handlerClick={ onHandlerClickfunction } />
          </div>
          <div className='num_1'>
            <Button type={ '_2' } text={ 'cle' } handlerClick={ handlerClickOperation } />
            <Button type={ '_2' } text={ '<-' } handlerClick={ handlerClickOperation } />
          </div>
        </div>
        <div className='operations'>
          <Button type={ '_2' } text={ '-' } handlerClick={ handlerClickOperation } />
          <Button type={ '_2' } text={ '+' } handlerClick={ handlerClickOperation } />
          <Button type={ '_2' } text={ '/' } handlerClick={ handlerClickOperation } />
          <Button type={ '_2' } text={ '*' } handlerClick={ handlerClickOperation } />
          <Button type={ '_2' } text={ '=' } handlerClick={ handlerClickOperation } />
        </div>
      </section>
    </main>
  )
}

// exportación

export { App }
