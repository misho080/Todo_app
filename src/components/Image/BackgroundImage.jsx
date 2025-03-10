import React from 'react'

const BackgroundImage = ({imageUrl, alt , className}) => {
  return (
    <div >
        <img className={className} src={imageUrl} alt={alt} />
    </div>
  )
}

export default BackgroundImage