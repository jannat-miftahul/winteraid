/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                Blue: "#384B70",
                primary: "#03131A",
                lightBlue: "#507687",
                secondary: "#E76F1B",
                background: "#FCFAEE",
                accent: "#B8001F",
            },
            fontFamily: {
                noto: ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
