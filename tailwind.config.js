module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            minHeight: {
                '96': '24rem',
            },
            colors: {
                theme: {
                    light: '#E0FBFC',
                    dark: '#293241',
                    primary: '#3D5A80',
                    secondary: '#98C1D9',
                    accent: '#EE6C4D'
                },
            },
            fontFamily: {
                ultra: ['Ultra', 'serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],


};
