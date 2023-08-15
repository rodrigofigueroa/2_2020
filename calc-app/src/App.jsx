//Import
import React              from 'react'
import { Result }         from './components/Result'
import { Button }         from './components/Button'
import { MathOperations } from './components/MathOperations'
import { Functions }   from './components/Functions'
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
          <Functions 
            onClickClear={ compClear => console.log( 'ComClear', compClear )} 
            onClickDelete={ compDelete => console.log( 'compDelete', compDelete ) } />
        </div>
        <MathOperations 
        onClickOperation={ operation  => console.log( 'Operations', operation )} 
        onClickEqual={ equal => console.log( 'Equal', equal ) } />
      </section>
    </main>
  )
}

// exportación

export { App }
