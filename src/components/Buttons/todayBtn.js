import React from "react"

const ButtonToday = ({ label, disabled, icon }) => {
    const buttonClasses = `transition ease-in-out delay-75 active:-translate-y-1 active:scale-90 duration-300 disabled:transform-none disabled:transition-none h-8 rounded-2xl bg-today text-dark text-sm font-semibold disabled:bg-light-gray px-3 py-1`;

    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default ButtonToday