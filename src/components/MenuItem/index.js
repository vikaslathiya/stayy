import React from 'react'

const MenuItem = ({ label }) => {
    return (
        <button className='w-200 py-2 pl-4 pr-0 bg-white text-sm font-semibold flex items-start'>
            {label}
        </button>
    )
}

export default MenuItem