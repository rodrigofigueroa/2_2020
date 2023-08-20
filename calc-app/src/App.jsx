//Import
import React, { useState }  from 'react'
import { Result }           from './components/Result'
import { MathOperations }   from './components/MathOperations'
import { Functions }        from './components/Functions'
import { Numbers }          from './components/Numbers'
import './App.css'

// Generar
const App = () => {
  console.log( 'render' )
  // state of the application using Usestate
  // destructuring
  const [ stack, setStack ] = useState( '' )
  // Texto
  // const texto = arrayValueFunction[ 0 ]
  // Funcion para modificar el texto
  // const functionTexto = arrayValueFunction[ 1 ]

  return (
    <main className='container'>
      <Result value={ stack }/>
      <section className='calc'>        
          <Numbers onClickNumber={
            numberText => {
              console.log( 'numberText', numberText )
              setStack( numberText )
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
