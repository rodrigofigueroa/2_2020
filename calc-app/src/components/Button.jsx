import React      from 'react'
import PropTypes  from 'prop-types'

const Button = ({ type, text, handlerClick }) => (
    <button className={ type } onClick={ () => handlerClick( text )}>
      <span>
        { text }
      </span>
    </button>
  )

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  handlerClick: PropTypes.func.isRequired
}

export { Button }