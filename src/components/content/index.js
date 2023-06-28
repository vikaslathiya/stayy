import React, { Fragment } from 'react'
import ButtonPrimary from '../Buttons/primary'
import ButtonSecondary from '../Buttons/secondary'
import ButtonSmall from '../Buttons/small'
import ButtonToday from '../Buttons/todayBtn'

const deleteIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="trash">
            <path id="Vector" d="M21 6.0004H16V4.3304C15.9765 3.69022 15.7002 3.08546 15.2316 2.64869C14.7629 2.21193 14.1402 1.97879 13.5 2.0004H10.5C9.85975 1.97879 9.23706 2.21193 8.76843 2.64869C8.2998 3.08546 8.02346 3.69022 8 4.3304V6.0004H3C2.73478 6.0004 2.48043 6.10576 2.29289 6.2933C2.10536 6.48083 2 6.73519 2 7.0004C2 7.26562 2.10536 7.51997 2.29289 7.70751C2.48043 7.89504 2.73478 8.0004 3 8.0004H4V19.0004C4 19.7961 4.31607 20.5591 4.87868 21.1217C5.44129 21.6843 6.20435 22.0004 7 22.0004H17C17.7956 22.0004 18.5587 21.6843 19.1213 21.1217C19.6839 20.5591 20 19.7961 20 19.0004V8.0004H21C21.2652 8.0004 21.5196 7.89504 21.7071 7.70751C21.8946 7.51997 22 7.26562 22 7.0004C22 6.73519 21.8946 6.48083 21.7071 6.2933C21.5196 6.10576 21.2652 6.0004 21 6.0004ZM10 4.3304C10 4.1704 10.21 4.0004 10.5 4.0004H13.5C13.79 4.0004 14 4.1704 14 4.3304V6.0004H10V4.3304ZM18 19.0004C18 19.2656 17.8946 19.52 17.7071 19.7075C17.5196 19.895 17.2652 20.0004 17 20.0004H7C6.73478 20.0004 6.48043 19.895 6.29289 19.7075C6.10536 19.52 6 19.2656 6 19.0004V8.0004H18V19.0004Z" fill="white" />
            <path id="Vector_2" d="M9 17C9.26522 17 9.51957 16.8946 9.70711 16.7071C9.89464 16.5196 10 16.2652 10 16V12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12V16C8 16.2652 8.10536 16.5196 8.29289 16.7071C8.48043 16.8946 8.73478 17 9 17Z" fill="white" />
            <path id="Vector_3" d="M15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12V16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17Z" fill="white" />
        </g>
    </svg>
)

const secondaryDeleteIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="trash">
            <path id="Vector" d="M21 6.0004H16V4.3304C15.9765 3.69022 15.7002 3.08546 15.2316 2.64869C14.7629 2.21193 14.1402 1.97879 13.5 2.0004H10.5C9.85975 1.97879 9.23706 2.21193 8.76843 2.64869C8.2998 3.08546 8.02346 3.69022 8 4.3304V6.0004H3C2.73478 6.0004 2.48043 6.10576 2.29289 6.2933C2.10536 6.48083 2 6.73519 2 7.0004C2 7.26562 2.10536 7.51997 2.29289 7.70751C2.48043 7.89504 2.73478 8.0004 3 8.0004H4V19.0004C4 19.7961 4.31607 20.5591 4.87868 21.1217C5.44129 21.6843 6.20435 22.0004 7 22.0004H17C17.7956 22.0004 18.5587 21.6843 19.1213 21.1217C19.6839 20.5591 20 19.7961 20 19.0004V8.0004H21C21.2652 8.0004 21.5196 7.89504 21.7071 7.70751C21.8946 7.51997 22 7.26562 22 7.0004C22 6.73519 21.8946 6.48083 21.7071 6.2933C21.5196 6.10576 21.2652 6.0004 21 6.0004ZM10 4.3304C10 4.1704 10.21 4.0004 10.5 4.0004H13.5C13.79 4.0004 14 4.1704 14 4.3304V6.0004H10V4.3304ZM18 19.0004C18 19.2656 17.8946 19.52 17.7071 19.7075C17.5196 19.895 17.2652 20.0004 17 20.0004H7C6.73478 20.0004 6.48043 19.895 6.29289 19.7075C6.10536 19.52 6 19.2656 6 19.0004V8.0004H18V19.0004Z" fill="#8999B0" />
            <path id="Vector_2" d="M9 17C9.26522 17 9.51957 16.8946 9.70711 16.7071C9.89464 16.5196 10 16.2652 10 16V12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12V16C8 16.2652 8.10536 16.5196 8.29289 16.7071C8.48043 16.8946 8.73478 17 9 17Z" fill="#8999B0" />
            <path id="Vector_3" d="M15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12V16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17Z" fill="#8999B0" />
        </g>
    </svg>
)

const editIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="edit">
            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M15.5535 5.45187L17.8368 7.7352C18.4752 8.34334 18.5012 9.35325 17.8952 9.99354L10.3952 17.4935C10.1235 17.7629 9.7675 17.9306 9.38684 17.9685L5.91184 18.2852H5.83684C5.61534 18.2865 5.40244 18.1995 5.24517 18.0435C5.06937 17.8684 4.98078 17.624 5.00351 17.3769L5.36184 13.9019C5.39976 13.5212 5.56748 13.1652 5.83684 12.8935L13.3368 5.39354C13.9834 4.84733 14.9366 4.87241 15.5535 5.45187ZM12.7702 8.2852L15.0035 10.5185L16.6702 8.89354L14.3952 6.61854L12.7702 8.2852Z" fill="#8999B0" />
        </g>
    </svg>
)

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
                </div>

                <div className='flex flex-col items-start gap-6' >
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

                <div className='flex flex-col items-start gap-6' >
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
        </Fragment>
    )
}

export default Content