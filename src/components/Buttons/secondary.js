import React from "react"

const ButtonSecondary = ({ label }) => {
    return (
        <button className='w-24 h-12 px-5.5 py-2.5 rounded-3xl border border-1 border-solid border-light-gray bg-white text-base font-medium text-dark'>
            {label}
        </button>
    )
}

export default ButtonSecondary