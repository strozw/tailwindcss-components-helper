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
        '.test-add': typed({
          display: 'block',

          // camelCase enabled
          marginTop: '20px',

          // kebab-case enabled
          'margin-top': '20px',

          backgroundColor: 'red'
        })
      })

      matchComponents(
        {
          'test-match': value => typed({
            display: 'block',

            // camelCase enabled
            marginTop: value,

            // kebab-case enabled
            'margin-top': value,

            color: 'blue',

            ':hover': {
              color: 'green'
            }
          }),
        },
        { values: theme('space') }
      )
    })
  ]
}

