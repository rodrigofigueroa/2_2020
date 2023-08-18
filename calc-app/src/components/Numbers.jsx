import React      from 'react'
import PropTypes  from 'prop-types'
import { Button } from './Button'

const Numbers = ({ onClickNumber }) => {

  const numbers = [1, 2, 3, 4, 5, 6 ,7 , 8, 9, 0]
  // DRY Dont repeat yourself
  
  const iterateButtton = num => (
    <Button 
      key={ num } 
      type={ '_1' } 
      text={ `${ num }` } 
      handlerClick={ onClickNumber } 
    />
  )

  return (
      <section className='num'>
        {
          numbers.map( itm => iterateButtton( itm ))
        }
      </section>
  )
}

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export { Numbers }