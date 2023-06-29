module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
                'background-gray': '#F8F9FA',
                'stayy-brand': '#66f',
                today: '#E2F8FF',
                good: '#49CA21',
                warning: '#F4A407',
                bad: '#FD4680'
            },
            backgroundImage: {
                gradient: 'var(--gradient, linear-gradient(135deg, #C345FF 0%, #66F 41.06%))',
                'gradient-2': 'linear-gradient(135deg, #F0FDFF 0%, #E9E9FF 100%)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            borderColor: {
                'light-gray': '#DBE4EC',
            },
            width: {
                1440: '1440px',
                1380: '1380px',
                100: '100px',
                280: '280px',
                200: '200px',
                228: '228px',
                86: '86%'
            },
            fontSize: {
                h1: '56px',
            },
            'boxShadow': {
                'simple-card': '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
                modal: '0px 18px 35px -4px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.24)',
                button: '0px 4px 12px 0px rgba(102, 102, 255, 0.24)',
                stays: '0px 2px 3px 0px rgba(27, 29, 44, 0.18)'
            },
        },
    },
    plugins: []
};
