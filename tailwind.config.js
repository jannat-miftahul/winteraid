/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#384B70",
                secondary: "#507687",
                background: "#FCFAEE",
                accent: "#B8001F",
                darkBlue: "#03131A",
                warmOrange: "#E76F1B",
            },
            fontFamily: {
                noto: ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
