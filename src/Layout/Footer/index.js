import React from 'react'
import stayy_logo from "@/images/stayy-logo.png";
import Image from 'next/image';
import Link from 'next/link';

const linkedin = (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="linkedin">
            <path id="Vector" d="M20.47 2.00209H3.53C3.33958 1.99945 3.1505 2.03434 2.97356 2.10478C2.79663 2.17521 2.6353 2.27981 2.4988 2.4126C2.36229 2.5454 2.25328 2.70378 2.17799 2.8787C2.1027 3.05363 2.06261 3.24167 2.06 3.43209V20.5721C2.06261 20.7625 2.1027 20.9506 2.17799 21.1255C2.25328 21.3004 2.36229 21.4588 2.4988 21.5916C2.6353 21.7244 2.79663 21.829 2.97356 21.8994C3.1505 21.9698 3.33958 22.0047 3.53 22.0021H20.47C20.6604 22.0047 20.8495 21.9698 21.0264 21.8994C21.2034 21.829 21.3647 21.7244 21.5012 21.5916C21.6377 21.4588 21.7467 21.3004 21.822 21.1255C21.8973 20.9506 21.9374 20.7625 21.94 20.5721V3.43209C21.9374 3.24167 21.8973 3.05363 21.822 2.8787C21.7467 2.70378 21.6377 2.5454 21.5012 2.4126C21.3647 2.27981 21.2034 2.17521 21.0264 2.10478C20.8495 2.03434 20.6604 1.99945 20.47 2.00209ZM8.09 18.7421H5.09V9.74209H8.09V18.7421ZM6.59 8.48209C6.17626 8.48209 5.77947 8.31774 5.48691 8.02518C5.19435 7.73262 5.03 7.33583 5.03 6.92209C5.03 6.50836 5.19435 6.11156 5.48691 5.81901C5.77947 5.52645 6.17626 5.36209 6.59 5.36209C6.80969 5.33718 7.03217 5.35895 7.24287 5.42598C7.45357 5.49301 7.64774 5.60378 7.81265 5.75105C7.97757 5.89833 8.10952 6.07877 8.19987 6.28057C8.29021 6.48238 8.33692 6.70099 8.33692 6.92209C8.33692 7.1432 8.29021 7.36181 8.19987 7.56361C8.10952 7.76541 7.97757 7.94586 7.81265 8.09313C7.64774 8.2404 7.45357 8.35118 7.24287 8.41821C7.03217 8.48524 6.80969 8.50701 6.59 8.48209ZM18.91 18.7421H15.91V13.9121C15.91 12.7021 15.48 11.9121 14.39 11.9121C14.0527 11.9146 13.7242 12.0204 13.4488 12.2153C13.1735 12.4102 12.9645 12.6848 12.85 13.0021C12.7717 13.2371 12.7378 13.4847 12.75 13.7321V18.7321H9.75C9.75 18.7321 9.75 10.5521 9.75 9.73209H12.75V11.0021C13.0225 10.5292 13.4189 10.1396 13.8964 9.8753C14.374 9.61098 14.9146 9.48194 15.46 9.50209C17.46 9.50209 18.91 10.7921 18.91 13.5621V18.7421Z" fill="#8999B0" />
        </g>
    </svg>
)

const facebook = (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="facebook">
            <path id="Vector" d="M20.9 2.00195H3.1C2.80826 2.00195 2.52847 2.11785 2.32218 2.32414C2.11589 2.53043 2 2.81021 2 3.10195V20.902C2 21.0464 2.02845 21.1894 2.08373 21.3229C2.13901 21.4564 2.22004 21.5776 2.32218 21.6798C2.42433 21.7819 2.54559 21.8629 2.67905 21.9182C2.81251 21.9735 2.95555 22.002 3.1 22.002H12.68V14.252H10.08V11.252H12.68V9.00195C12.6261 8.47371 12.6885 7.94008 12.8627 7.43849C13.0369 6.9369 13.3188 6.4795 13.6885 6.09836C14.0582 5.71723 14.5068 5.42159 15.0028 5.23219C15.4989 5.04279 16.0304 4.9642 16.56 5.00195C17.3383 4.99716 18.1163 5.03723 18.89 5.12195V7.82195H17.3C16.04 7.82195 15.8 8.42195 15.8 9.29195V11.222H18.8L18.41 14.222H15.8V22.002H20.9C21.0445 22.002 21.1875 21.9735 21.321 21.9182C21.4544 21.8629 21.5757 21.7819 21.6778 21.6798C21.78 21.5776 21.861 21.4564 21.9163 21.3229C21.9715 21.1894 22 21.0464 22 20.902V3.10195C22 2.9575 21.9715 2.81446 21.9163 2.681C21.861 2.54754 21.78 2.42628 21.6778 2.32414C21.5757 2.22199 21.4544 2.14097 21.321 2.08569C21.1875 2.03041 21.0445 2.00195 20.9 2.00195Z" fill="#8999B0" />
        </g>
    </svg>
)

const CustomLink = ({ title, path }) => (
    <Link href={path} className='px-3 py-1 text-dark text-sm font-semibold'>
        {title}
    </Link>
)

const Footer = () => {
    return (
        <footer className='flex pb-6  flex-col items-center gap-10 sm:gap-20'>
            <div className='flex px-6 pt-10 sm:pt-20 justify-between items-center w-86 flex-col sm:flex-row gap-6 border-t border-light-gray '>
                <div className='flex flex-col gap-6 items-start'>
                    <div className='flex flex-col gap-3 items-start'>
                        <div className="h-6 w-100 m-auto sm:m-0">
                            <Image alt="nature" src={stayy_logo} width={100} height={100} />
                        </div>
                        <p className='text-dark-gray text-lg'>Your private accommodations network.</p>
                    </div>
                    <div className='flex py-3 items-start gap-6 m-auto sm:m-0'>
                        {linkedin}
                        {facebook}
                    </div>
                </div>


                <div className='flex items-start gap-3 sm:gap-6 flex-col sm:flex-row'>
                    <div className='m-auto sm:m-0'>
                        <div className='flex flex-col gap-3'>
                            <CustomLink title='Stayy' path='/' />
                            <CustomLink title='About' path='/' />
                            <CustomLink title='Blog' path='/' />
                        </div>
                    </div>
                    <div className='m-auto sm:m-0'>
                        <div className='flex flex-col gap-3'>
                            <CustomLink title='Terms of use' path='/' />
                            <CustomLink title='Privacy policy' path='/' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex py-3 justify-center items-center self-stretch'>
                <p className='text-medium-gray text-lg'>© 2023 STAYY LLC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer