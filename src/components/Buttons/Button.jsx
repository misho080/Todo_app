import React from 'react'



const Button = ({ className, onclick, children }) => {
    return (
        <div>
            <button className={className} onClick={onclick}>{children}</button>
        </div>
    )
}

export default Button