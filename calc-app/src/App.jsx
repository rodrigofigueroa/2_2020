/* eslint no-eval: 0 */
import React, { useState }  from 'react'
import words                from 'lodash.words'
import { Result }           from './components/Result'
import { MathOperations }   from './components/MathOperations'
import { Functions }        from './components/Functions'
import { Numbers }          from './components/Numbers'
import './App.css'

const App = () => {
  
  const [ stack, setStack ] = useState( '' )

  const regex   = /[^-^+^*^/]+/g    
  const items   = words( stack, regex )  
  const value   = items.length > 0 ? items[ items.length -1 ] : '0'
    
  return (
    <main className='container'>
      <Result value={ value }/>
      <section className='calc'>        
        <Numbers onClickNumber={ numberText => setStack( `${ stack }${ numberText }` ) }/>
        <MathOperations 
          onClickOperation={ operation  => setStack( `${ stack }${ operation }`) }
          onClickEqual={ equal => setStack( eval( stack ).toString() ) } 
        />
        <Functions 
            onClickClear={ compClear => setStack( '' ) } 
            onClickDelete={ compDelete => {
              let stackLength = stack.length
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
