module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1B1D2C',
                bad: '#FD4680',
                'light-gray': '#DBE4EC',
                'dark-gray': '#6E7989',
                'medium-gray': '#8999B0',
            },
            backgroundColor: {
                'light-gray': '#DBE4EC',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            borderColor: {
                'light-gray': '#DBE4EC',
            },
            width: {
                '1440': '1440px',
                '100': '100px',
            },
            fontSize: {
                'h1': '56px',
            },
        },
    },
    plugins: [],
};
