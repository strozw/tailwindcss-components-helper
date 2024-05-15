
# tailwind components helper

## About

This package was created to improve the development experience by enabling code completion when defining styles such as Emotion and Styled Components using `addComponents` and `matchComponents`, which are used when creating tailwindcss plugins. 

It was also created to support the ideas defined in the tailwindcss description below.
https://github.com/tailwindlabs/tailwindcss/discussions/13673


## Install

```
# npm
npm install -D tailwindcss-components-helper

# yarn
yarn add -D tailwindcss-components-helper

# pnpm
pnpm add -D tailwindcss-components-helper
```

## Usages

If you use it in a `"type": "module"` project, it will look like this:


```ts
import plugin from 'tailwindcss/plugin'
import { css } from 'tailwindcss-components-helper'

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    plugin(({ theme, addComponents, matchComponents }) => {
      addComponents({
        '.test-add': css({
          display: 'block',
          marginTop: '20px',
          'margin-top': '20px',
          backgroundColor: 'red',

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
        })
      })

      matchComponents(
        {
          'test-match': value => css({
            display: 'block',
            marginTop: value,
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
```


