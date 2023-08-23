/* eslint no-eval: 0 */
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
              setStack( `${ stack }${ numberText }` )
            }
          }/>
        <MathOperations 
        onClickOperation={ operation  => {
          console.log( 'Operations', operation )
          setStack( `${ stack }${ operation }`)
        }}
        onClickEqual={ equal => {
          console.log( 'Equal', equal )
          setStack( eval( stack ).toString() )
          }} />
        <Functions 
            onClickClear={ compClear => {
              console.log( 'ComClear', compClear )
              setStack( '' )
            }} 
            onClickDelete={ compDelete => {
              let stackLength = stack.length
              // console.log( stack.length, stack.slice( 0, 2 - 1 ))
              // slice 
              // substring 
              if( stackLength > 0 ) {
                console.log( 'compDelete', compDelete ) 
                setStack( stack.slice( 0, stack.length -1  ) )
              }
            }} />
      </section>
    </main>
  )
}

// exportación

export { App }
