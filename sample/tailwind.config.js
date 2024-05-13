import plugin from 'tailwindcss/plugin'
import { defineComponent as typed } from 'tailwindcss-components-helper'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",], theme: { extend: {}, },
  plugins: [
    plugin(({ theme, addComponents, matchComponents }) => {
      addComponents({
        '.test-add1': typed({
          display: 'block',

          marginTop: '20px',
        }),

        '.test-add2': typed({
          backgroundColor: 'red',

          ':hover': {
            backgroundColor: 'white',
          }
        }),
      })

      matchComponents(
        {
          'test-match1': value => typed({
            marginTop: value
          }),

          'test-match2': value =>
            [
              typed({
                display: 'block',

                // camelCase enabled
                marginTop: value,

                // kebab-case enabled
                'margin-top': value,

                color: 'blue'
              }),
              typed({
                ':hover': {
                  color: 'green'
                }
              })
            ]
        },
        { values: theme('space') }
      )
    })
  ],
}

