/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#1B1D2C',
                'bad': '#FD4680',

            },
            backgroundColor: {
                'light-gray': '#DBE4EC'
            },
            fontFamily: {
                'inter': 'Inter'
            },
            borderColor: {
                'light-gray': '#DBE4EC'
            }
        },
    },
    plugins: [],
}