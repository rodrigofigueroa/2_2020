import React      from 'react'
import PropTypes  from 'prop-types'

const Result = ({ value = '9' }) => (
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
  value: '10'
}

export { Result }