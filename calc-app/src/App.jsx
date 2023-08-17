//Import
import React              from 'react'
import { Result }         from './components/Result'
import { MathOperations } from './components/MathOperations'
import { Functions }      from './components/Functions'
import { Numbers }        from './components/Numbers'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )

  return (
    <main className='container'>
      <Result/>
      <section className='calc'>        
          <Numbers onClickNumber={
            numberText => {
              console.log( 'numberText', numberText )
            }
          }/>
        <MathOperations 
        onClickOperation={ operation  => console.log( 'Operations', operation )} 
        onClickEqual={ equal => console.log( 'Equal', equal ) } />
        <Functions 
            onClickClear={ compClear => console.log( 'ComClear', compClear )} 
            onClickDelete={ compDelete => console.log( 'compDelete', compDelete ) } />
      </section>
    </main>
  )
}

// exportación

export { App }
