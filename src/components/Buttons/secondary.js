import React from "react"

const ButtonSecondary = ({ label, disabled, icon }) => {
    const buttonClasses = `transition ease-in-out delay-75 active:-translate-y-1 active:scale-90 duration-300 disabled:transform-none disabled:transition-none h-12 rounded-3xl w-auto border border-1 border-solid border-light-gray bg-white text-base font-medium text-dark ${!label && icon ? "p-3" : icon ? "flex justify-center items-center gap-3 px-6 py-3" : "px-6 py-3"}`;

    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default ButtonSecondary