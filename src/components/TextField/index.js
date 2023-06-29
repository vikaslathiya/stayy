import Image from 'next/image'
import React from 'react'
import visibleEye from '../../assets/images/visible.png'

const TextField = ({ type, placeholder }) => {
    const classes = `${type === 'password' ? 'pr-11 pl-4' : 'px-4'} flex w-228 rounded-lg py-2.5 items-center gap-2.5  border border-1 border-solid  border-light-gray bg-background-gray text-medium-gray text-lg font-normal focus-visible:outline-0`
    return (
        <div className='relative'>
            <input
                className={classes}
                type={type}
                placeholder={placeholder}
            />
            {type === 'password' &&
                <div className='absolute top-3.5 right-4 cursor-pointer'>
                    <Image src={visibleEye} alt='visible' />
                </div>}
        </div>
    )
}

export default TextField