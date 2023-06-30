import React, { Fragment } from 'react'
import ButtonPrimary from '../Buttons/primary'
import ButtonSecondary from '../Buttons/secondary'
import ButtonSmall from '../Buttons/small'
import ButtonToday from '../Buttons/todayBtn'
import ButtonText from '../Buttons/textBtn'
import MenuItem from '../MenuItem'
import Avatar from '../Avatar'
import userImg from '@/images/user.png'
import TextField from '../TextField'
import CheckBox from '../Checkbox'
import Radio from '../Radio'
import Image from 'next/image'
import stayy_logo from '@/images/stayy-logo.png'
import stayy_dark from '@/images/stayy-dark.png'
import logo from "@/images/house-icon.png";
import {
    deleteIcon,
    secondaryDeleteIcon,
    editIcon,
    contentIconBox,
    multipleIcons
} from 'src/assets/Icons'

const shadowsItems = [
    { id: 1, title: 'Cards', shadow: 'shadow-simple-card' },
    { id: 2, title: 'Modals & popovers', shadow: 'shadow-modal' },
    { id: 3, title: 'Primary button', shadow: 'shadow-button' },
    { id: 4, title: 'Calendar Stays', shadow: 'shadow-stays' },
]

const colorsItems = [
    { id: 1, title: 'White', bg: 'bg-white' },
    { id: 2, title: 'Background', bg: 'bg-background-gray', color: 'text-dark' },
    { id: 3, title: 'Light Gray', bg: 'bg-light-gray', color: 'text-dark' },
    { id: 4, title: 'Medium Gray', bg: 'bg-medium-gray', color: 'text-white' },
    { id: 5, title: 'Dark Gray', bg: 'bg-dark-gray', color: 'text-white' },
    { id: 6, title: 'Dark', bg: 'bg-dark', color: 'text-white' },
    { id: 7, title: 'STAYY Brand', bg: 'bg-stayy-brand', color: 'text-white' },
    { id: 8, title: 'Gradient', bg: 'bg-gradient', color: 'text-white' },
    { id: 9, title: 'Gradient 2', bg: 'bg-gradient-2', color: 'text-dark' },
    { id: 10, title: 'Today', bg: 'bg-today', color: 'text-dark' },
    { id: 11, title: 'Positive Things', bg: 'bg-good', color: 'text-white' },
    { id: 12, title: 'Warning', bg: 'bg-warning', color: 'text-white' },
    { id: 13, title: 'Bad', bg: 'bg-bad', color: 'text-white' },
]

const Content = () => {
    return (
        <Fragment>
            <div className='flex flex-col items-center gap-10'>
                <div className='p-10 gap-16 flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>

                    <div className='flex flex-col items-start gap-6 mb-8' >
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

                    <div className='flex flex-col items-start gap-6 mb-8' >
                        <h3 className='text-dark text-2xl font-bold'>Interactive:</h3>
                        <hr className='self-stretch' />

                        <ButtonPrimary label='Primary Button' disabled />
                        <ButtonPrimary label='Primary Button' />
                        <ButtonPrimary label='Primary Button' icon={deleteIcon} />
                        <ButtonPrimary icon={deleteIcon} />
                        <hr className='self-stretch' />

                        <ButtonSecondary label='Secondary Button' />
                        <ButtonSecondary label='Secondary Button' icon={secondaryDeleteIcon} />
                        <ButtonSecondary icon={secondaryDeleteIcon} />
                        <hr className='self-stretch' />

                        <ButtonSmall label='SMALL BUTTON' disabled />
                        <ButtonSmall label='SMALL BUTTON' icon={editIcon} />
                        <ButtonSmall icon={editIcon} />
                        <ButtonToday label='Today' />
                        <hr className='self-stretch' />

                        <ButtonText label='Small Text Button' />
                        <hr className='self-stretch' />

                        <MenuItem label='Menu Item' />
                        <hr className='self-stretch' />

                        <Avatar path={userImg} />
                        <hr className='self-stretch' />

                        <TextField type='text' placeholder='Hint Text' />
                        <TextField type='password' placeholder='Hint Text' />
                        <hr className='self-stretch' />

                        <CheckBox label='Check Box - Disabled' id='checkbox-1' value='checkbox' disabled />
                        <CheckBox label='Check Box' id='checkbox-2' value='checkbox' checked />
                        <Radio label='Radio Button' id='radio' value='radio' checked />

                    </div>

                    <div className='flex flex-col items-start gap-6 mb-8' >
                        <h3 className='text-dark text-2xl font-bold'>Colors:</h3>
                        <hr className='self-stretch' />

                        {colorsItems.map(item => (
                            <div
                                key={item.id}
                                className={`flex items-center justify-center h-16 w-280 rounded-2xl ${item.bg}`}
                            >
                                <p className={`text-sm font-semibold ${item.color}`}>
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-start gap-6 mb-8' >
                        <h3 className='text-dark text-2xl font-bold'>Shadows:</h3>
                        <hr className='self-stretch' />

                        {shadowsItems.map(item => (
                            <div
                                key={item.id}
                                className={`flex items-center justify-center h-16 w-280 rounded-2xl bg-white ${item.shadow}`}
                            >
                                <p className='text-dark text-sm font-semibold'>
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='flex w-auto xl:w-1380 p-20 flex-col items-start gap-6'>
                    <div className='flex justify-center items-center gap-2'>
                        <div className="h-10 w-10">
                            <Image alt="logo" src={logo} className='w-8 h-8' />
                        </div>
                        <div className="h-3.5 w-16">
                            <Image alt="nature" src={stayy_logo} />
                        </div>
                    </div>
                    <Image src={stayy_dark} alt='logo' />

                    {contentIconBox}

                    <div className='flex items-start gap-6 flex-wrap' >
                        {multipleIcons.map((item, i) => <div key={i} className='m-0 lg:flex lg:items-center lg:justify-center lg:m-auto'>{item}</div>)}
                    </div>
                </div>

                <div className='flex w-auto py-36 px-20 flex-col items-center gap-2.5'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="stayy">
                            <path id="Stroke-1" d="M20.915 1.98844L36.1729 14.8254C36.486 15.0873 36.6667 15.473 36.6667 15.8794V32.8932C36.6667 33.6544 35.5973 34.731 34.8303 34.731L24.2209 34.7309L24.221 31.973C27.1821 31.9735 29.8215 31.9739 31.4109 31.9741L31.7717 31.9742C31.9416 31.9742 32.0956 31.9742 32.2324 31.9742L32.5899 31.9743C32.6236 31.9743 32.6553 31.9743 32.6848 31.9743L32.9651 31.9743C33.707 31.9743 33.8889 31.4471 33.8889 30.9733L33.8889 16.841C33.8882 16.485 33.8706 16.338 33.442 15.9834C33.1472 15.7394 28.7562 12.106 20.269 5.08326C20.1798 5.00944 19.9927 4.86644 19.727 5.08659C19.5519 5.23169 15.1129 8.90479 6.41006 16.1059C6.31098 16.1879 6.11115 16.4626 6.11313 16.8749C6.13221 20.8505 6.14069 23.9708 6.14112 26.2356L6.14113 26.5325C6.14079 29.1104 6.12942 30.5017 6.11115 30.7063C6.05844 31.2967 6.16387 31.9575 7.38003 31.9659C7.8043 31.9688 14.8366 31.971 21.4232 31.9724L21.4231 34.7309L5.18453 34.731C4.41747 34.731 3.33337 33.6544 3.33337 32.8932V15.8794C3.33337 15.473 3.51409 15.0873 3.82722 14.8254L19.1249 1.98844C19.642 1.55594 20.3979 1.55594 20.915 1.98844Z" fill="#8999B0" />
                            <path id="Rectangle" fillRule="evenodd" clipRule="evenodd" d="M20.6974 20.191L14.8032 21.7936C14.5531 21.8616 14.3796 22.0887 14.3796 22.3478V34.2315C14.3796 34.4775 14.5362 34.6961 14.7691 34.7753L20.6633 36.7785C20.9636 36.8806 21.2899 36.7199 21.3919 36.4195C21.4122 36.36 21.4225 36.2976 21.4225 36.2347V20.7453C21.4225 20.428 21.1653 20.1709 20.8481 20.1709C20.7972 20.1709 20.7466 20.1777 20.6974 20.191Z" fill="#8999B0" />
                        </g>
                    </svg>
                    <p className='text-medium-gray text-center text-xs font-normal '>
                        Thank you for staying.
                    </p>
                </div>

            </div>
        </Fragment>
    )
}

export default Content