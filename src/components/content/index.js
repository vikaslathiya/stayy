import React, { Fragment } from 'react'

const Content = () => {
    return (
        <Fragment>
            <div className='flex p-20 justify-center gap-16'>

                <div className='flex flex-col items-start gap-6' >
                    <h3 className='text-dark text-2xl font-bold font-inter'>Typography:</h3>
                    <hr className='self-stretch' />
                    <h1 className='text-h1 font-black text-dark'>H1</h1>
                    <h2 className='text-5xl font-bold text-dark'>H2</h2>
                    <h3 className='text-2xl font-bold text-dark'>H3</h3>
                    <h4 className='text-lg font-semibold text-dark'>H4</h4>
                    <p className='text-base font-semibold text-dark'>Primary Button</p>
                    <p className='text-base text-dark'>Secondary Button</p>
                    <p className='text-sm font-semibold text-dark'>Small Button</p>
                    <p className='text-xl text-dark-gray'>Body Large</p>
                    <p className='text-lg text-dark-gray'>Body 1</p>
                    <p className='text-sm text-dark-gray'>Body 2</p>
                    <p className='text-xs text-dark-gray'>Caption</p>
                </div>

                <div className='flex flex-col items-start gap-6' >
                    <h3 className='text-dark text-2xl font-bold'>Interactive:</h3>
                    <hr className='self-stretch' />
                </div>

                <div className='flex flex-col items-start gap-6' >
                    <h3 className='text-dark text-2xl font-bold'>Colors:</h3>
                    <hr className='self-stretch' />
                </div>

                <div className='flex flex-col items-start gap-6' >
                    <h3 className='text-dark text-2xl font-bold'>Shadows:</h3>
                    <hr className='self-stretch' />
                </div>

            </div>
        </Fragment>
    )
}

export default Content