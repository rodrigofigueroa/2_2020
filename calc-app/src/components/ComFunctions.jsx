import React      from 'react'
import PropTypes  from 'prop-types'
import { Button } from './Button'

const ComFunctions = ({ onClickClear, onClickDelete }) => (
  <section className='num_1'>
    <Button type={ '_2' } text={ 'cle' } handlerClick={ onClickClear } />
    <Button type={ '_2' } text={ '<-' } handlerClick={ onClickDelete } />
  </section>
)

ComFunctions.propTypes = {
  onClickClear: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export { ComFunctions }