/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                funzania: {
                    purple: '#4c1d95',
                    primary: '#5B21B6',
                    yellow: '#FFC83D',
                    green: '#22C55E',
                    pink: '#EC4899',
                }
            },
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
            }
        },
    },
    plugins: [],
}