import React from 'react'

const Radio = ({ id, checked, value, label, disabled }) => {
    return (
        <div className='relative flex items-center'>
            <input
                disabled={disabled}
                type="radio"
                id={id}
                value={value}
                checked={checked}
                className='m-2 w-5 h-5 form-checkbox border-light-gray accent-[#6666FF]'
            />
            <label for={id} className={`text-lg font-normal ${disabled ? 'text-light-gray' : 'text-dark '}`}>
                {label}
            </label>
        </div>
    )
}

export default Radio