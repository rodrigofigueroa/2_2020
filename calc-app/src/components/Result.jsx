import React from 'react'

const Result = ({ value }) => {
  // const { value } = props
  console.log( 'Result ', value )
  return (
    <div className="result">
      <span>
        { value }
      </span>
    </div>
  )
}

export { Result }