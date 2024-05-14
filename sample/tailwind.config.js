import plugin from "tailwindcss/plugin";
import { css } from "tailwindcss-components-helper";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [
    plugin(({ theme, addComponents, matchComponents }) => {
      addComponents({
        ".test-add": css({
          display: "block",
          marginTop: "20px",
          "margin-top": "20px",
          backgroundColor: "red",
          opacity: 0.2,

          '&:hover': {
            backgroundColor: "white",
            animation: 'my-anim infinite 20s linear',

            '@keyframes my-anim': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            }
          }
        }),
      });

      addComponents(
        [
          css({
            '.custom-container': {
              width: '100%',
            },
            '@media (min-width: 100px)': {
              '.custom-container': {
                maxWidth: '100px',
              },
            },
          }),
          css({
            '.btn': {
              padding: '1rem .5rem',
              display: 'block',
            },
            '@media (min-width: 100px)': {
              '.btn': {
                display: 'inline-block',
              },
            },
          }),
        ]
      );

      matchComponents(
        {
          "test-match": (value) =>
            css({
              display: "block",
              marginTop: value,
              "margin-top": value,
              color: "blue",

              ":hover": {
                color: "green",
              },
            }),
        },
        { values: theme("space") },
      );
    }),
  ],
};
