import React from 'react'

const Result = ( props ) => {
  console.log( 'Result ', props, props.value )
  return (
    <div className="result">
      <span>
        { props.value }
      </span>
    </div>
  )
}

export { Result }