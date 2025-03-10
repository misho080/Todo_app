import React from 'react'

const Input = ({ type, value, classname, onChange ,onkeypress , placeholder,checked}) => {
    return (
 
        <input   className={classname} placeholder={placeholder} checked={checked} onKeyPress={onkeypress}  type={type} value={value} onChange={onChange} />

    )
}

export default Input