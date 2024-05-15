/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '352px',
            'sm': '640px',
            'md': '769px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: '#d38200',
                negative: '#92140c',
                info: "#4b8f9c",
                secondaryInfo: "#0f7173"
            }
        },

    },
    plugins: [],
}

