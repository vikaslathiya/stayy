import Image from 'next/image'
import React from 'react'

const Avatar = ({ path }) => {
    return (
        <div className='flex items-start gap-2.5'>
            <Image className='rounded-3xl' src={path} alt='avatar' />
        </div>
    )
}

export default Avatar