import React from "react"

const ButtonText = ({ label }) => {
    const buttonClasses = `transition ease-in-out delay-75 active:-translate-y-1 active:scale-90 duration-300 disabled:transform-none disabled:transition-none h-8 rounded-2xl text-dark text-sm font-semibold px-3 py-1`;

    return (
        <button className={buttonClasses}>
            {label}
        </button>
    )
}

export default ButtonText