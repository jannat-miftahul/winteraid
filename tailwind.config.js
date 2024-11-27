/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Blue: "#384B70",
                Blue: "#004A98",
                primary: "#181C14",
                lightBlue: "#507687",
                Orange: "#E76F1B",
                lightOrange: "#FFBF61",
                // background: "#FCFAEE",
                background: "#EEF5FF",
                accent: "#B8001F",
            },
            fontFamily: {
                noto: ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
