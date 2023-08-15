import React      from 'react'
import PropTypes  from 'prop-types'
import { Button } from './Button'

const Functions = ({ onClickClear, onClickDelete }) => (
  <section className='num_1'>
    <Button type={ '_2' } text={ 'cle' } handlerClick={ onClickClear } />
    <Button type={ '_2' } text='&larr;' handlerClick={ onClickDelete } />
  </section>
)

Functions.propTypes = {
  onClickClear: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export { Functions }