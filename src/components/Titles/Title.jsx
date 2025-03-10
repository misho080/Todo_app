import React from 'react'

const Title = ({className , children}) => {
  return (
    <div>
        <p className={className}>{children}</p>
    </div>
  )
}

export default Title