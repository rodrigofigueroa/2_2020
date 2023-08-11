import React      from 'react'
import PropTypes  from 'prop-types'
import { Button } from './Button'

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="operations">
    <Button type={ '_2' } text={ '+' } handlerClick={ onClickOperation } />
    <Button type={ '_2' } text={ '-' } handlerClick={ onClickOperation } />
    <Button type={ '_2' } text={ '*' } handlerClick={ onClickOperation } />
    <Button type={ '_2' } text={ '/' } handlerClick={ onClickOperation } />
    <Button type={ '_2' } text={ '=' } handlerClick={ onClickEqual } />
  </section>
)

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired
}

export { MathOperations }