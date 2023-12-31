import React      from 'react'
import PropTypes  from 'prop-types'

const Result = ({ value = '0' }) => (
    <div className="result">
      <span>
        { value }
      </span>
    </div>
  )

Result.propTypes = {
  value: PropTypes.string.isRequired
}

Result.defaultProps = {
  value: '0'
}

export { Result }