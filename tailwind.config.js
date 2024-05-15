/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#d38200',
                negative: '#92140c',
                positive: '#0FB75C',
                info: "#4b8f9c",
                heavy: {
                    orange: "#e37200",
                    red: "#720f0f",
                    green: "#0FB75C",
                    cyan: "#0f7173"
                }
            }
        },
        screens: {
            'xs': '352px',
            'sm': '640px',
            'md': '769px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },

    },
    plugins: [],
}

