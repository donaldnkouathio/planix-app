/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // mode dark via classe
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4f46e5', // couleur principale par défaut
                    light: '#6366f1',   // optionnelle, pour hover par exemple
                    dark: '#3730a3',    // optionnelle
                },
                secondary: {
                    DEFAULT: '#ec4899',
                    light: '#f472b6',
                    dark: '#be185d',
                }
            }
        }
    },
    plugins: [],
}
